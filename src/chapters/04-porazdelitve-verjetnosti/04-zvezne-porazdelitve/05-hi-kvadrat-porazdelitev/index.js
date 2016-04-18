import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import Chart from 'components/chart';

const title = 'Hi-kvadrat porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="X^2 (n)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Hi-kvadrat porazdelitev je posebna oblika porazdelitve gama.
                Njen parameter je število prostostnih stopenj, ki je tesno
                povezano s številom možnih izidov nekega poskusa. Z njo lahko
                preverjamo zanesljivost izidov poskusov. Če na zanima ali je
                kocka poštena lahko tako vzamemo 5 izidov kot prostostne stopnje
                in računamo za zadnjega. S pomočjo tabele lahko tako ugotovim
                porazdelitve lahko nato določimo ali je odstopanje kocke
                preveliko.
            </p>
            
            <Formula
                name="Hi-kvadrat porazdelitev"
                math="X^2 (n) \sim \Gamma \left(\frac{n}{2}, \frac{1}{2}\right)"
                params={{
                    'n': 'Število prostostnih stopenj'
                }}
            />
            
            <p>
                Pri računanju s hi-kvadrat porazdelitvijo si lahko pomagamo z
                naslednjimi formulami:
            </p>
            
            <Formula.Group>
                <Formula
                    name="Funkcija gostote"
                    math="f(x) = \frac{x^{\frac{n}{2} - 1} e^{-\frac{x}{2}}}{2^{\frac{n}{2}} \Gamma (\frac{n}{2})}"
                />
                
                <Formula
                    name="Porazdelitvena funkcija"
                    math="F(x) = \frac{1}{\Gamma(\frac{n}{2})} \int_{0}^{\frac{x}{2}} t^{\frac{n}{2} - 1} e^{-t} dt"
                    params={{
                        'x': 'Vrednost izida'
                    }}
                />
            </Formula.Group>
            
            <Formula.Group>
                <Formula
                    name="Matematično upanje"
                    math="E(X) = n"
                />
                
                <Formula
                    name="Disperzija"
                    math="D(X) = 2n"
                    params={{
                        'X': 'Slučajna spremenljivka'
                    }}
                />
            </Formula.Group>
            
            <Chart
                name="Primer grafa"
                width="500" height="400"
                func="Squared(x, n)" params={{ n: 3 }}
                range={[-1, 5]} continuous
            />
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });