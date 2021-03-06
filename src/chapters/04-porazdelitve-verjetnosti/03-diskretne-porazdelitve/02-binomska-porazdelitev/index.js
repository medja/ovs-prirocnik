import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Binomska porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="B(n, p)" />
        </span>
    );
}

function Chapter() {
    const variables = '0 & 1 & 2 & ... & n';
    const probabilities = 'q^n & npq^{n - 1} & f(3) & ... & p^n';
    
    const distribution = `
        B(n, p) \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Binomska porazdelitev razporeja glede na število uspelih
                poskusov. Odvisna je od verjetnosti uspeha poskusa in od
                števila njegovih ponovitev, saj gre v resnici le za zaporedje
                neodvisnih poskusov. Primer take porazdelitve je zaporedno
                metanje kocke.
            </p>
            
            <Formula
                name="Binomska porazdelitev"
                math={distribution}
                params={{
                    'n': 'Število ponovitev poskusa',
                    'p': 'Verjetnost uspeha poskusa',
                    'q': 'Verjetnost neuspeha poskusa'
                }}
            />
            
            <p>
                Pri računanju z binomsko porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \binom{n}{x} p^x q^{n - x}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \sum_{i=0}^x f(i)"
                    params={{
                        'x': 'Število uspehov'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = n p"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = n p q"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Binomial(x, n, p)" params={{ n: 4, p: 1/2 }}
                range={[-1, 5]} discrete
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });