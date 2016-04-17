import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Eksponentna porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="Exp(\lambda)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Eksponentna porazdelitev razporeja glede na čas, ki preteče do
                nekega dogodka. Njen parameter je frekvenca ponovitve tega
                dogodka. Primer take porazdelitve srečamo, ko nas zanima, koliko
                časa bo preteklo, preden bo v trgovino prišla prva stranka, če
                vemo, kako pogosto prihajajo nove stranke.
            </p>
            
            <Formula
                name="Eksponentna porazdelitev"
                math="Exp(\lambda)"
                params={{
                    '\\lambda': 'Povprečen čas do dogodka'
                }}
            />
            
            <p>
                Pri računanju z eksponentno porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \lambda e^{-\lambda x}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = 1 - e^{-\lambda x}"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{1}{\lambda}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{1}{\lambda^2}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Exponential(x, \lambda)" params={{ '\\lambda': 3/5 }}
                range={[-1, 5]} continuous
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });