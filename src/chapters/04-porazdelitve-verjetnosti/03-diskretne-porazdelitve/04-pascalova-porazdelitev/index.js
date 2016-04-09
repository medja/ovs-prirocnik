import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import { Discrete } from 'components/plot';

const title = 'Pascalova porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="P(m, p)" />
        </span>
    );
}

function Chapter() {
    const variables = 'm & m + 1 & ... & m + i & ...';
    const probabilities = 'p^m & m p^m q & ... & f(m + i) & ...';
    
    const distribution = `
        P(m, p) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Pascalova porazdelitev razporeja glede na število potrebnih
                poskusov do prvih nekaj uspehov. Odvisna je od števila potrebnih
                uspehov in verjetnosti uspeha. Pascalova porazdelitev, pri
                kateri je potreben le en uspeh, je v resnici geometrijska.
                Primer take porazdelitve je opazovanje, po koliko metih na kocki
                dvakrat pade šestica.
            </p>
            
            <Formula
                name="Pascalova porazdelitev"
                math={distribution}
                params={{
                    'm': 'Število uspehov poskusa',
                    'p': 'Verjetnost uspeha poskusa',
                    'q': 'Verjetnost neuspeha poskusa'
                }}
            />
            
            <p>
                Pri računanju s Pascalovo porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \binom{x - 1}{m - 1} p^m q^{x - m}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = p^m \sum_{i=1}^x \binom{i - 1}{m - 1} q^{i - m}"
                    params={{
                        'x': 'Število poskusov'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{m}{p}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{m q}{p^2}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <p style={{ padding: '0 1rem', fontStyle: 'italic' }}>
                Primer grafa za <Equation math="m = 2" /> in{' '}
                <Equation math="p = 1/3" />:
            </p>
            
            <p style={{ textAlign: 'center' }}>
                <Discrete
                    width="500" height="400"
                    range={[1, 12]} selected={[1, 12]}
                    func="x < 2 ? 0 : (x - 1) * (1/3)^2 * (2/3)^(x - 2)"
                />
            </p>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });