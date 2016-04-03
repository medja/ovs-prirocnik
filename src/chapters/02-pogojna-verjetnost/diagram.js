import React, { Component } from 'react';

import Formula from 'components/formula';
import { External, Line, Rectangle, Surface } from 'components/graphics';

import Event from './event';

class Diagram extends Component {
    
    state = {
        selected: null,
        focused: null
    };
    
    box = {
        width: 100,
        height: 60,
        
        stroke: '#000000',
        strokeWidth: 1
    };
    
    external = {
        width: this.box.width,
        height: this.box.height
    };
    
    colors = {
        white: '#ffffff',
        orange: '#ff9800',
        green: '#4caf50',
        blue: '#03a9f4'
    };
    
    events = {
        'G#1': { x: 0, y: 200 },
        'A_1': { x: 225, y: 100 },
        'A_2': { x: 225, y: 200 },
        'A_3': { x: 225, y: 300 },
        'A_1B': { x: 450, y: 0 },
        'A_1!B': { x: 450, y: 80 },
        'A_2B': { x: 450, y: 160 },
        'A_2!B': { x: 450, y: 240 },
        'A_3B': { x: 450, y: 320 },
        'A_3!B': { x: 450, y: 400 },
        'B': { x: 675, y: 100 },
        '!B': { x: 675, y: 300 },
        'G#2': { x: 900, y: 200 }
    };
    
    paths = [
        ['G#1', 'A_1'],
        ['G#1', 'A_2'],
        ['G#1', 'A_3'],
        
        ['A_1', 'A_1B'],
        ['A_1', 'A_1!B'],
        
        ['A_2', 'A_2B'],
        ['A_2', 'A_2!B'],
        
        ['A_3', 'A_3B'],
        ['A_3', 'A_3!B'],
        
        ['A_1B', 'B'],
        ['A_2B', 'B'],
        ['A_3B', 'B'],
        
        ['A_1!B', '!B'],
        ['A_2!B', '!B'],
        ['A_3!B', '!B'],
        
        ['B', 'G#2'],
        ['!B', 'G#2']
    ];
    
    onMouseEnter(name) {
        const focused = new Set(this.findSiblings(name, 1));
        
        this.setState({ selected: name, focused });
    }
    
    onMouseLeave(name) {
        this.setState({ selected: null, focused: null });
    }
    
    findSiblings(name, depth) {
        const handleSibling = (siblings, sibling) => {
            if (depth > 1) {
                return siblings.concat(this.findSiblings(sibling, depth - 1));
            } else {
                return siblings.concat(sibling);
            }
        };
        
        return this.paths
            .filter(path => path.includes(name))
            .map(([from, to]) => from != name ? from : to)
            .reduce(handleSibling, [name])
    }
    
    getColor(name) {
        const { focused } = this.state;
        
        if (focused == null || focused.has(name)) {
            return this.findColor(name);
        }
        
        return this.colors.white;
    }
    
    findColor(name) {
        const A = name.includes('A');
        const B = name.includes('B');
        
        return do {
            if (A && B) this.colors.green;
            else if (A) this.colors.orange;
            else if (B) this.colors.blue;
            else this.colors.white;
        };
    }
    
    parseEvent(name) {
        const A = this.parseIndex(name, /A_(\d)/);
        const B = this.parseIndex(name, /(!?)B/);
        const G = this.parseIndex(name, /G#(\d)/);
        
        return { A, B, G };
    }
    
    parseIndex(name, pattern) {
        const match = name.match(pattern);
        
        if (!match) return null;
        else if (match[1] === '') return true;
        else if (match[1] === '!') return false;
        else return parseInt(match[1], 10);
    }
    
    formatEvent({ A, B }) {
        if (A == null && B == null) {
            return 'G';
        }
        
        let event = '';
        
        if (A != null) {
            event += `A_${A}`;
        }
        
        if (B != null) {
            event += B ? 'B' : `\\overline{B}`;
        }
        
        return event;
    }
    
    render() {
        // Do not use KaTex inside foreignObject because it uses
        // relative positioning for displaying its output!
        // https://bugs.chromium.org/p/chromium/issues/detail?id=578682
        
        const events = Object.entries(this.events).map(([name, event]) => ({
            ...event, name,
            fill: this.getColor(name)
        }));
        
        return (
            <div>
                <Surface width="1000" height="460">
                    { this.paths.map(this.renderPath, this) }
                    { events.map(this.renderEvent, this) }
                </Surface>
                { this.renderFormulas() }
            </div>
        );
    }
    
    renderPath([left, right]) {
        const from = this.events[left];
        const to = this.events[right];
        
        const x1 = from.x + this.box.width - 1;
        const y1 = from.y + this.box.height / 2;
        
        const x2 = to.x + 1;
        const y2 = to.y + this.box.height / 2;
        
        const key = [left, right].join('-');
        
        return (
            <Line key={key} from={[x1, y1]} to={[x2, y2]} strokeWidth="1.4" />
        );
    }
    
    renderEvent({name, ...props}) {
        return (
            <Rectangle key={name} {...this.box} {...props}>
                <External {...this.external}
                        onMouseEnter={() => this.onMouseEnter(name)}
                        onMouseLeave={() => this.onMouseLeave(name)}>
                    <Event name={name} />
                </External>
            </Rectangle>
        );
    }
    
    renderFormulas() {
        return (
            <Formula
                name="Sistem dogodkov"
                math={this.renderMath()}
            />
        );
    }
    
    renderMath() {
        const { selected } = this.state;
        
        if (!selected) {
            return [
                'P(AB) = P(A/B) \\cdot P(B)',
                'P(AB) = P(B/A) \\cdot P(A)',
            ];
        }
        
        const { A, B, G } = this.parseEvent(selected);
        
        const event = this.formatEvent({ A, B });
        
        if (G == 1) {
            return `P(${event}) = \\sum_{i=1}^3 P(A_i)`;
        }
        
        if (G == 2) {
            return `P(${event}) = P(B) + P(\\overline{B})`;
        }
        
        if (A == null) {
            return `P(${event}) = \\sum_{i=1}^3 P(A_i ${event})`;
        }
        
        if (B == null) {
            return `P(${event}) = P(${event} B) + P(${event} \\overline{B})`;
        }
        
        const eventA = this.formatEvent({ A });
        const eventB = this.formatEvent({ B });
        
        return [
            `P(${event}) = P(${eventA}/${eventB}) \\cdot P(${eventB})`,
            `P(${event}) = P(${eventB}/${eventA}) \\cdot P(${eventA})`
        ];
    }
    
}

export default Diagram;