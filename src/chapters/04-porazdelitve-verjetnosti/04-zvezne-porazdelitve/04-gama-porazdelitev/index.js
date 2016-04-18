import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Gama porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="\Gamma (\alpha, \beta)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Gama porazdelitev je posplošitev eksponentne, ki ji lahko
                spreminjamo obliko. Če je njen prvi parameter, parameter oblike,
                enak 1, je ta namreč enaka eksponentni porazdelitvi. Drugi
                parameter pa je kot pri eksponentni frekvenca ponovitve nekega
                dogodka. Z njo se srečamo v bolj zahtevnih primerih računanja
                časa čakanja na neki dogodek.
            </p>
            
            <Formula
                name="Gama porazdelitev"
                math="\Gamma (\alpha, \beta)"
                params={{
                    '\\alpha': 'Oblika krivuje',
                    '\\beta': 'Frekvenca dogodka'
                }}
            />
            
            <p>
                Pri računanju z gamma porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{1}{\Gamma(\alpha)} \int_{0}^{\beta x} t^{\alpha - 1} e^{-t} dt"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = \frac{\alpha}{\beta}"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = \frac{\alpha}{\beta^2}"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Formula
                name="Funkcija Gama"
                math={[
                    '\\Gamma (x) = (x - 1)!, \\,x \\in \\mathbb{N}',
                    '\\Gamma (x) = (x - 1) \\Gamma(x - 1)',
                    '\\Gamma (1/2) = \\sqrt{2}',
                    '\\Gamma (1) = 1'
                ]}
            />
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Gamma(x, \alpha, \beta)" params={{ '\\alpha': 3/2, '\\beta': 3/5 }}
                range={[-1, 5]} continuous
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });