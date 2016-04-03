import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './style.css';

class Line extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    getAttrs() {
        const {
            from: [x1, y1],
            to: [x2, y2],
            
            stroke,
            strokeWidth = 1,
            
            className
        } = { ...this.props.style, ...this.props };
        
        return { x1, y1, x2, y2, stroke, strokeWidth, className };
    }
    
    getProps() {
        const {
            from, to,
            stroke, strokeWidth,
            className,
            
            ...props
        } = this.props;
        
        return props;
    }
    
    render() {
        const {
            x1, y1, x2, y2,
            stroke, strokeWidth,
            className
        } = this.getAttrs();
        
        const style = {
            ...this.props.style,
            
            stroke, strokeWidth
        };
        
        const {
            x: offsetX = 0, y: offsetY = 0
        } = this.context;
        
        const props = {
            ...this.getProps(),
            
            x1: parseFloat(x1) + offsetX,
            x2: parseFloat(x2) + offsetX,
            y1: parseFloat(y1) + offsetY,
            y2: parseFloat(y2) + offsetY,
            
            className: classNames(styles.line, className),
            style
        };
        
        return (
            <line {...props} />
        );
    }
    
}

export default Line;