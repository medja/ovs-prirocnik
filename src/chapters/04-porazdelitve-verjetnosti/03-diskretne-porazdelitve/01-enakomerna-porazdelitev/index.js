import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Enakomerna porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="U(n)" />
        </span>
    );
}

function Chapter() {
    const variables = '1 & 2 & 3 & ... & n';
    const probabilities = '1/n & 1/n & 1/n & ... & 1/n';
    
    const distribution = `
        U(n) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Enakomerna porazdelitev razporeja enakomerno. To pomeni, da so
                vsi njeni izidi enako verjetni. Primera take porazdelitve sta
                met kovanca in kocke.
            </p>
            
            <Formula
                name="Enakomerna porazdelitev"
                math={distribution}
                params={{
                    'n': 'Število možnih izidov'
                }}
            />
            
            <p>
                Pri računanju z enakomerno porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{1}{n}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{x}{n}"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{n + 1}{2}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{n^2 - 1}{12}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Uniform(x, n)" params={{ n: 4 }}
                range={[0, 5]} discrete
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });