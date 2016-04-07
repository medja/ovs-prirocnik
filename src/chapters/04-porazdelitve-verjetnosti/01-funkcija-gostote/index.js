import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';

const title = 'Funkcija gostote';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="p(x)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Funkcija gostote nam omogoča računanje verjetnosti slučajev
                spremenljivke, <strong>če poznamo njeno porazdelitev</strong>.
                Njeno vrednost lahko razberemo tudi s pomočjo verjetnostne
                tabele, saj je njena vrednost za neki <Equation math="x" />{' '}
                natanko vrednost v tabeli pod tem <Equation math="x" />-om,
                torej <Equation math="p_x" />.
            </p>
            
            <p>
                Ta funkcija nam zato pride prav, ko ne poznamo vnaprej
                verjetnosti izidov oziroma kadar potrebujemo enačbo za izračun
                le teh. Ker ta funkcija vrača relativno gostoto oziroma
                verjetnost nekega izida pa seveda more biti omejena. Ker nič ne
                more biti več kot <Equation math="100\%" /> mora biti vsota vseh
                vrednosti te funkcije vedno enaka <Equation math="1" />.
            </p>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });