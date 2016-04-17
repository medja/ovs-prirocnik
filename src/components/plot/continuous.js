import React from 'react';

import { Path } from 'components/graphics';
import Plot from './plot';

class Continuous extends Plot {
    
    discrete = false;
    
    position(step) {
        const { width, min } = this.params;
        
        return step / width + min - 0.5;
    }
    
    update(props) {
        let points = this.generate(this.width + 1, (x, y) => {
            return [x, y];
        });
        
        const limit = this.params.height / 2;
        
        for (let i = points.length - 2; i >= 0; i--) {
            if (Math.abs(points[i][1] - points[i + 1][1]) > limit) {
                points.splice(i + 1, 0, [ points[i + 1][0], points[i][1] ]);
            }
        }
        
        this.setState({ points });
    }
    
    createPath(points) {
        return {
            path: [[ 'M', ...points ]],
            strokeWidth: 2
        };
    }
    
    plot() {
        const { fill } = this.props;
        const { points } = this.state;
        const { range, selected, width } = this.params;
        
        const from = Math.round((selected[0] - range[0] + 0.5) * width);
        const to = Math.round((selected[1] - range[0] + 0.5) * width);
        
        const lower = Math.max(from, 0);
        const upper = Math.min(to, points.length - 1);
        
        const left = points.slice(0, lower + 1);
        const center = points.slice(lower, upper + 1);
        const right = points.slice(upper);
        
        const paths = [
            left, center, right
        ].filter(points => {
            return points.length > 0;
        }).map(this.createPath);
        
        const lines = [
            [
                [from, points[lower][1]], 
                [from, this.height - this.offset]
            ],
            [
                [to, points[upper][1]], 
                [to, this.height - this.offset]
            ],
        ].map(this.createPath);
        
        const filled = [
            [from, this.height - this.offset],
            ...center,
            [to, this.height - this.offset]
        ];
        
        const area = {
            ...this.createPath(filled),
            strokeWidth: 0,
            fill
        };
        
        return [
            (<Path key="area" {...area} />),
            
            ...paths.map((path, i) => (
                <Path key={`path${i}`} {...path} />
            )),
            
            ...lines.map((line, i) => (
                <Path key={`line${i}`} {...line} />
            ))
        ];
    }
    
}

export default Continuous;