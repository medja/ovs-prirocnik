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
            <Equation math="U(a, b)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Enakomerna porazdelitev razporeja enakomerno. To pomeni, da so
                vsi njeni izidi enako verjetni. Primer take porazdelitve je
                izbor naključne realne številke na nekem intervalu.
            </p>
            
            <Formula
                name="Enakomerna porazdelitev"
                math="U(a, b)"
                params={{
                    'a': 'Najmanjša možna vrednost',
                    'b': 'Največja možna vrednost'
                }}
            />
            
            <p>
                Pri računanju z enakomerno porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{1}{b - a}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{x - a}{b - a}"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{a + b}{2}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{(b - a)^2}{12}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Uniform(x, a, b)" params={{ a: 0, b: 4 }}
                range={[-1, 5]} continuous
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });