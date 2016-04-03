import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './style.css';
import Group from './group';

class Rectangle extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    getAttrs() {
         const {
            x = 0, y = 0,
            width, height,
            
            fill, fillOpacity,
            stroke, strokeWidth = 0,
            
            children, className
        } = { ...this.props.style, ...this.props };
        
        return {
            x, y, width, height,
            
            fill, fillOpacity,
            stroke, strokeWidth,
            
            children, className
        };
    }
    
    getProps() {
        const {
            x, y, width, height,
            
            fill, fillOpacity,
            stroke, strokeWidth,
            
            children, className,
            
            ...props
        } = this.props;
        
        return props;
    }
    
    render() {
        const {
            x, y, width, height,
            
            fill, fillOpacity,
            stroke, strokeWidth,
            
            children, className
        } = this.getAttrs();
        
        const style = {
            ...this.props.style,
            
            fill, fillOpacity,
            stroke, strokeWidth
        };
        
        const offset = parseFloat(strokeWidth || 0);
        
        const {
            x: offsetX = 0, y: offsetY = 0
        } = this.context;
        
        const group = {
            x: parseFloat(x) + offset + offsetX,
            y: parseFloat(y) + offset + offsetY,
            
            className: classNames(styles.rectangle, className)
        };
        
        const rectangle = {
            ...this.getProps(),
            
            x: group.x,
            y: group.y,
            
            width: parseFloat(width) - offset * 2,
            height: parseFloat(height) - offset * 2,
            
            style
        };
        
        return (
            <Group {...group}>
                <rect {...rectangle} />
                { children }
            </Group>
        );
    }
    
}

export default Rectangle;