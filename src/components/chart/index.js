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
        
        return func.replace(/\b[\w_]+\b/g, (name, pos) => {
            return pos == 0 || !(name in params) ? name : params[name];
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
            const variable = name.replace(/^_/, '\\');
            const fraction = math.fraction(value).toFraction();
            
            return `${variable} = ${fraction}`;
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