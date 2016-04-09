import React from 'react';

import { Path } from 'components/graphics';
import Plot from './plot';

class Discrete extends Plot {
    
    discrete = true;
    
    position(step) {
        const { min } = this.params;
        
        return step + min;
    }
    
    update(props) {
        const { steps, width } = this.prepare(props);
        
        const sections = this.generate(steps, (x, y) => {
            const left = x * width;
            const right = left + width;
            
            return [ [left, 0], [left, y], [right, y], [right, 0] ];
        });
        
        this.setState({ sections });
    }
    
    plot() {
        const { sections } = this.state;
        const { fill, range, selected } = this.props;
        
        const style = {
            shapeRendering: 'crispEdges'
        };
        
        const paths = sections.map((section, i) => {
            const x = i + range[0];
            const inRange = x >= selected[0] && x <= selected[1];
            
            return {
                path: [[ 'M', ...section ]],
                fill: inRange ? fill : undefined,
                strokeWidth: 2,
                style
            };
        });
        
        return paths.map((path, i) => (
            <Path key={i} {...path} strokeWidth="2" />
        ));
    }
    
}

export default Discrete;