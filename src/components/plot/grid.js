import React, { Component } from 'react';

import { Group, Line, Text } from 'components/graphics';

class Grid extends Component {
    
    render() {
        const {
            range: [min, max],
            width, height,
            offset, padding,
            discrete
        } = this.props;
        
        const steps = max - min + 1;
        const scale = width / steps;
        const stop = discrete ? 0 : (0.5 - min) * scale;
        
        const line = {
            shapeRendering: 'crispEdges'
        };
        
        const text = {
            fontSize: `${offset * 6 / 10}px`
        };
        
        const xAxis = {
            from: [0, height - offset],
            to: [width, height - offset],
            style: line
        };
        
        const yAxis = {
            from: [stop, 0],
            to: [stop, height - offset + padding],
            style: line
        };
        
        let numbers = [];
        
        for (let i = 0; i < steps; i++) {
            numbers.push({
                x: (i + 0.5) * scale,
                y: height - offset + padding,
                style: text,
                center: true,
                value: i + min
            });
        }
        
        return (
            <Group>
                <Line {...xAxis} />
                <Line {...yAxis} />
                
                { numbers.map(({ value, ...attrs }) => (
                    <Text key={value} {...attrs}>{ value }</Text>
                )) }
            </Group>
        );
    }
    
}

export default Grid;