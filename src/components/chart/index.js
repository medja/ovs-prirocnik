import React, { Component } from 'react';

import { math } from 'core';
import Equation from 'components/equation';
import { Continuous, Discrete } from 'components/plot';
import style from './style.css';

class Chart extends Component {
    
    isDiscrete() {
        if (this.props.discrete === true) return true;
        if (this.props.continuous === false) return true;
        
        return false;
    }
    
    getFunc() {
        const { func, params } = this.props;
        
        return func.replace(/[(\s,]([\w\\]+)\b/g, (match, name, pos) => {
            if (pos == 0 || !(name in params)) {
                return match;
            } else {
                return match[0] + params[name];
            }
        });
    }
    
    render() {
        return (
            <div className={style.plot}>
                <p>
                    { this.renderTitle() }
                </p>
                <p>
                    { this.renderPlot() }
                </p>
            </div>
        );
    }
    
    renderTitle() {
        const { name, params } = this.props;
        
        const variables = Object.entries(params).map(([name, value]) => {
            return `${name} = ${math.fraction(value).toFraction()}`;
        }).join(', ');
        
        return (
            <em>
                { name } za <Equation math={variables} />
            </em>
        );
    }
    
    renderPlot() {
        const {
            width, height,
            range, selected
        } = this.props;
        
        const Plot = this.isDiscrete() ? Discrete : Continuous;
        
        return (
            <Plot
                width={width} height={height}
                range={range} selected={selected}
                func={this.getFunc()}
            />
        );
    }
    
}

export default Chart;