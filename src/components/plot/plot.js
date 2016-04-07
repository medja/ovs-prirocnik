import React, { Component } from 'react';

import { math, range } from 'core';
import { Surface, Path } from 'components/graphics';

import Grid from './grid';

class Plot extends Component {
    
    width = 1000;
    height = 700;
    
    padding = 20;
    offset = 100;
    
    componentWillMount() {
        this.update(this.props);
    }
    
    componentWillReceiveProps(props) {
        this.update(props);
    }
    
    prepare(props) {
        const { range: [min, max] } = props;
        
        this.compile(props.func);
        
        const steps = max - min + 1;
        const width = this.width / steps;
        const height = this.height - this.padding - this.offset;
        
        this.params = {
            steps,
            min, max,
            width, height
        };
        
        return this.params;
    }
    
    generate(steps, generator) {
        this.params.scale = 0;
        
        const values = Array.from(range(steps), step => {
            const x = this.position(step);
            const y = this.func(x);
            
            if (y > this.params.scale) {
                this.params.scale = y;
            }
            
            return generator(step, y);
        });
        
        return this.scale(values);
    }
    
    scale(values) {
        return values.map(point => {
           if (Array.isArray(point[0])) {
               return this.scale(point);
           } else {
               const [ x, y ] = point;
               const { height, scale } = this.params;
               
               return [ x, this.padding + height * (1 - y / scale) ]
           }
        });
    }
    
    compile(func) {
        if (this.funcSource != func) {
            const compiled = math.compile(func);
            
            this.funcSource = func;
            this.func = (x) => compiled.eval({ x });
        }
    }
    
    render() {
        const { range, style, className } = this.props;
        
        const surface = {
            width: this.width,
            height: this.height,
            
            style, className
        };
        
        const grid = {
            width: this.width,
            height: this.height,
            
            padding: this.padding,
            offset: this.offset,
            
            discrete: this.discrete,
            
            range
        };
        
        return (
            <Surface {...surface}>
                { this.plot() }
                
                <Grid {...grid} />
            </Surface>
        );
    }
    
}

export default Plot;