import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Cauchyjeva porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="C(x_0, \gamma)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Cauchyjeva porazdelitev je porazdelitev, ki slika pod kotom,
                kot vrteč svetilnik, ki osvetljuje neki raven zid. Pogosto se
                uporablja v fiziki in si jo jo zato težko predstavljati na
                preprostejših primerih. Kot parametra prejme položaj in razteg.
            </p>
            
            <Formula
                name="Cauchyjeva porazdelitev"
                math="C(x_0, \gamma)"
                params={{
                    'x_0': 'Parameter položaja',
                    '\\gamma': 'parameter raztega'
                }}
            />
            
            <p>
                Pri tej porazdelitev včasih namesto raztega v obliki razmerja
                dobimo razpon. Pretvorba iz enega v drugega:{' '}
                <Equation math="\gamma' = \frac{1}{\gamma}" />
            </p>
            
            <p>
                Pri računanju z Cauchyjevo porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{1}{\pi \gamma \left( 1 + \left( \frac{x - x_0}{\gamma} \right)^2 \right)}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{1}{\pi} \text{arctan} \left( \frac{x - x_0}{\gamma} \right) + \frac{1}{2}"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \text{ne obstaja}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \text{ne obstaja}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });