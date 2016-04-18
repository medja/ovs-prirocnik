import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Poissonova porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="P(\lambda)" />
        </span>
    );
}

function Chapter() {
    const variables = '0 & 1 & 2 & ... & n';
    const probabilities = 'e^{-\\lambda} & \\lambda e^{-\\lambda} & f(2) & ... & f(n)';
    
    const distribution = `
        P(\\lambda) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Poissonova porazdelitev razporeja glede na število ponovitev
                nekega dogodka v danem časovnem intervalu. Odvisna je torej le
                od pričakovanih ponovitev v enakem časovnem intervalu. Primer
                take porazdelitve je opazovanje števila vozil, ki pripelje skozi
                križišče v desetih minutah.
            </p>
            
            <Formula
                name="Poissonova porazdelitev"
                math={distribution}
                params={{
                    '\\lambda': 'Pričakovana frekvenca dogodka'
                }}
            />
            
            <p>
                Pri računanju s Poissonovo porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{\lambda^x e^{-\lambda}}{x!}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = e^{-\lambda} \sum_{i=0}^{x} \frac{\lambda^i}{i!}"
                    params={{
                        'x': 'Število poskusov'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \lambda"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \lambda"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Poisson(x, \lambda)" params={{ '\\lambda': 3 }}
                range={[-1, 10]} discrete
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });