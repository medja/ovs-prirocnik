import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './style.css';

class Rectangle extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    render() {
        const { x = 0, y = 0, className, children, ...rest } = this.props;
        
        const style = {
            ...this.props.style
        };
        
        const { x: offsetX = 0, y: offsetY = 0 } = this.context;
        
        const props = {
            ...rest,
            
            x: parseFloat(x) + offsetX,
            y: parseFloat(y) + offsetY,
            
            className: classNames(styles.text, className),
            style
        };
        
        return (
            <text {...props}>{ children }</text>
        );
    }
    
}

export default Rectangle;