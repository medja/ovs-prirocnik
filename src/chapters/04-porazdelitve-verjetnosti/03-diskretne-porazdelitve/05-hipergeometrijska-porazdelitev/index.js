import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import { Discrete } from 'components/plot';

const title = 'Hipergeomterijska porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="H(n, M, N)" />
        </span>
    );
}

function Chapter() {
    const variables = '0 & 1 & 2 & ... & n';
    const probabilities = 'f(0) & f(1) & f(2) & ... & f(n)';
    
    const distribution = `
        H(n, M, N) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Hipergeometrijska porazdelitev razporeja glede na število
                ugodnih izborov. Odvisna je od števila vseh možnih izbir, vseh
                ugodnih izbir in števila izbir, ki jih naredimo. Primer take
                porazdelitve je igra z barvastimi kroglicami, kjer izbiramo brez
                vračanja in nas zanima verjetnost, da smo izbrali določeno
                število kroglic prave barve.
            </p>
            
            <Formula
                name="Pascalova porazdelitev"
                math={distribution}
                params={{
                    'n': 'Število vseh izbir',
                    'M': 'Število ugodnih možnosti',
                    'N': 'Število vseh možnosti'
                }}
            />
            
            <p>
                Pri računanju z hipergeomterijsko porazdelitvijo si lahko
                pomagamo z naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{\binom{M}{x}\binom{N - M}{n - x}}{\binom{N}{n}}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{\sum_{i=0}^x \binom{M}{i}\binom{N - M}{n - i}}{\binom{N}{n}}"
                    params={{
                        'x': 'Število poskusov'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{nM}{N}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = n \frac{M}{N} \frac{(N - M)}{N} \frac{N - n}{N - 1}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <p style={{ padding: '0 1rem', fontStyle: 'italic' }}>
                Primer grafa za <Equation math="n = 4" />,{' '}
                <Equation math="M = 3" /> in <Equation math="N = 10" />:
            </p>
            
            <p style={{ textAlign: 'center' }}>
                <Discrete
                    width="500" height="400"
                    range={[-1, 4]} selected={[0, 3]}
                    func="x < 0 ? 0 : binomial(3, x) * binomial(7, 4 - x) / binomial(10, 4)"
                />
            </p>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });