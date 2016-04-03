import React, { Component, PropTypes } from 'react';

class Group extends Component {
    
    static contextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    static childContextTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    };
    
    getChildContext() {
        const { x: baseX = 0, y: baseY = 0 } = this.context;
        const { x: relativeX = 0, y: relativeY = 0 } = this.props;
        
        return {
            x: parseFloat(baseX) + parseFloat(relativeX),
            y: parseFloat(baseY) + parseFloat(relativeY)
        };
    }
    
    render() {
        return (
            <g {...this.props} />
        );
    }
    
}

export default Group;