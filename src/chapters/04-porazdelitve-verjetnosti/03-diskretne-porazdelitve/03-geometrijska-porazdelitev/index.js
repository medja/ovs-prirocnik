import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Geometrijska porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="G(p)" />
        </span>
    );
}

function Chapter() {
    const variables = '1 & 2 & 3 & ... & i & ...';
    const probabilities = 'p & p q & p q^2 & ... & p q^{i - 1} & ...';
    
    const distribution = `
        G(p) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Geometrijska porazdelitev razporeja glede na število potrebnih
                poskusov do prvega uspeha. Odvisna je torej le od verjetnosti
                uspeha tega poskusa. Uspešen pa mora biti vedno le zadnji
                poskus. Primer take porazdelitve je opazovanje, po koliko metih
                na kocki pade šestica.
            </p>
            
            <Formula
                name="Geometrijska porazdelitev"
                math={distribution}
                params={{
                    'p': 'Verjetnost uspeha poskusa',
                    'q': 'Verjetnost neuspeha poskusa'
                }}
            />
            
            <p>
                Pri računanju z geometrijsko porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = p q^{x - 1}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = 1 - q^x"
                    params={{
                        'x': 'Število poskusov'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{1}{p}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{q}{p^2}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>        
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Geometric(x, p)" params={{ p: 1/3 }}
                range={[0, 10]} discrete
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });