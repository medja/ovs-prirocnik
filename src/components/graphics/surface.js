import React, { Component } from 'react';

class Surface extends Component {
    
    render() {
        const {
            width = 100, height = 100,
            crisp, children,
            
            ...rest
        } = this.props;
        
        const viewBox = `0 0 ${width} ${height}`;
        
        const style = {
            shapeRendering: crisp ? 'crispEdges' : 'geometricPrecision',
            ...this.props.style
        };
        
        const props = {
            ...rest,
            
            viewBox, style
        };
        
        return (
            <svg xmlns="http://www.w3.org/2000/svg" {...props}>
                { children }
            </svg>
        );
    }
    
}

export default Surface;