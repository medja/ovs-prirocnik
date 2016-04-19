import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Normalna porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="N(\mu, \sigma)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Normalna porazdelitev razporeja po Gaussovi krivulji. Z njo se
                srečamo pri izvajanju poskusov z natančno določeno pričakovano
                vrednostjo in standardnim odklonom. Primer take porazdelitve je
                streljanje na tarčo. Ker merimo v sredino, ta predstavlja
                pričakovano vrednost. A to še ne pomeni, da naši streli ne
                odstopajo, vsekakor pa jih večina pristane znotraj standardnega
                odklona.
            </p>
            
            <Formula
                name="Normalna porazdelitev"
                math="N(\mu, \sigma)"
                params={{
                    '\\mu': 'Povprečna vrednost',
                    '\\sigma': 'Standardni odklon'
                }}
            />
            
            <p>
                Pri računanju z normalno porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2} (\frac{x - \mu}{\sigma})^2}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \phi(\frac{x - \mu}{\sigma})"
                    params={{
                        'x': 'Vrednost izida',
                        '\\phi': 'Funkcija napake'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \mu"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \sigma^2"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Normal(x, \mu, \sigma)" params={{ '\\mu': 2, '\\sigma': 1 }}
                range={[-1, 5]} continuous
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });