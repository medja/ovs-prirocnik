import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './style.css';

class Line extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    getPath() {
        const { x = 0, y = 0 } = this.context;
        
        return this.props.path.map(segment => {
            return segment[0] + segment.slice(1).map(point => {
                return `${point[0] + x},${point[1] + y}`;
            }).join(' ');
        }).join(' ');
    }
    
    getAttrs() {
        const {
            fill = 'none', fillOpacity,
            stroke, strokeWidth = 1,
            
            className
        } = { ...this.props.style, ...this.props };
        
        return {
            fill, fillOpacity,
            stroke, strokeWidth,
            
            className
        };
    }
    
    getProps() {
        const {
            path,
            fill, fillOpacity,
            stroke, strokeWidth,
            className,
            
            ...props
        } = this.props;
        
        return props;
    }
    
    render() {
        const {
            fill, fillOpacity,
            stroke, strokeWidth,
            
            className
        } = this.getAttrs();
        
        const style = {
            ...this.props.style,
            
            fill, fillOpacity,
            stroke, strokeWidth
        };
        
        const props = {
            ...this.getProps(),
            
            className: classNames(styles.line, className),
            d: this.getPath(),
            style
        };
        
        return (
            <path {...props} />
        );
    }
    
}

export default Line;