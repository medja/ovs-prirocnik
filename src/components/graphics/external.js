import React, { Component, PropTypes } from 'react';

class External extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    render() {
        const { x: baseX = 0, y: baseY = 0 } = this.context;
        
        const {
            x: relativeX = 0, y: relativeY = 0,
            width, height, children, ...rest
        } = this.props;
        
        const props = {
            ...rest,
            
            x: parseFloat(baseX) + parseFloat(relativeX),
            y: parseFloat(baseY) + parseFloat(relativeY),
            
            width, height
        };
        
        return (
            <foreignObject {...props}>
                { children }
            </foreignObject>
        );
    }
    
}

export default External;