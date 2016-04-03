import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';

import PorazdelitevSpremenljivke from './01-porazdelitev-spremenljivke';
import PrimerNaloge from './02-primer-naloge';

const title = 'Slučajne spremenljivke';

function Chapter() {
    return (
        <div>
            <p>
                Slučajne spremenljivke niso v verjetnosti nič drugega kot sistem
                elementarnih dogodkov, s katerim lahko štejemo. Tako da medtem,
                ko je lahko dogodek <Equation math="A" />: padlo je{' '}
                <Equation math="5" /> pik, je lahko slučajna spremenljivka{' '}
                <Equation math="X" /> število pik na kocki. S tako definicijo
                lahko nato dogodek <Equation math="A" /> definiramo z{' '}
                <Equation math="X=5" />. Seveda pa se moč slučajnih spremenljivk
                tukaj še ne ustavi.
            </p>
            
            <p>
                Torej moramo pred računanjem verjetnosti s slučajnimi
                spremenljivkami te najprej omejiti s slučaji, ti pa so razlog za
                izredno moč slučajnih spremenljivk.
            </p>
            
            <Formula
                name="Primerjava slučajnih spremenljivk z dogodki"
                math={[
                    'P(X = 3) = P(A_3)',
                    'P(X < 3) = P(A_1) + P(A_2)',
                    'P( X >3) = P(A_4) + P(A_5) + P(A_6)',
                ]}
                params={{
                    'A_i': 'Število pik na kocki'
                }}
            />
            
            <p>
                Ker slučajna spremenljivka vedno zajema nek popoln sistem
                dogodkov pa to povzroči še dve zanimivi lastnosti. Obe izhajata
                iz definicije sistema dogodkov, in sicer te, da je vsota vseh
                njenih verjetnosti vedno enaka <Equation math="1" />, saj se v
                takšnem sistemu vedno zgodi natanko en dogodek.
            </p>
            
            <p>
                Prva lastnost je v resnici le namig, ki nam pove, da lahko s
                seštevanjem vseh verjetnosti slučajev neke spremenljivke,
                preverimo pravilnost naših izračunov. Druga pa nam pomaga,
                ko ima spremenljivka zelo veliko število slučajev, saj je
                včasih lažje izračunati njen kompliment.
            </p>
            
            <Formula
                name="Kompliment slučajne spremenljivke"
                math="P(X \geq 5) = 1 - P(X < 5)"
            />
        </div>
    );
}

const subchapters = [
    PorazdelitevSpremenljivke,
    PrimerNaloge
];

export default createChapter(title, Chapter, subchapters);