import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';

import Diagram from './diagram';

import BajesovObrazec from './01-bayesov-obrazec';
import PrimerNaloge from './02-primer-naloge';

const title = 'Pogojna verjetnost';

function Chapter() {
    return (
        <div>
            <p>
                Pogojno verjetnosti si je najlažje predstavljati s pomočjo
                geometrijske definicije verjetnosti. Saj gre v le za zožanje
                gotovega prostora dogodkov. V resnici pogojna verjetnost
                ni nekaj novega, saj so vsi dogodki pogojeni z gotovim
                dogodkom <Equation math="G" />. Torej, ko nek dogodek{' '}
                <Equation math="A" /> pogojimo z dogodkom <Equation math="B" />,
                postane B nov gotov dogodek, saj privzamemo, da se je dogodek
                gotovo zgodil. Zato njegova verjetnost postane{' '}
                <Equation math="P(A/B) = \frac{P(A)}{P(B)}" />.
            </p>
            
            <p>
                Vendar te formuli očitno nekaj manjka. Če nas zanima pogojna
                verjetnost gotovega dodogka <Equation math="G" /> pri dogodku{' '}
                <Equation math="A" />, bi pričakovali, da bo pogojena verjetnost
                ostala <Equation math="1" />, saj gre namreč še vedno za gotov
                dogodek. A z zgornjo formulo to ne drži.
            </p>
            
            <Formula
                name="Primer napake"
                math="P(G/A) = \frac{P(G)}{P(A)} = \frac{1}{0.5} = 2"
                params={{
                    'G': 'Gotov dogodek',
                    'A': 'Dogodek z verjetnostjo 0.5'
                }}
            />
            
            <p>
                Rezultat je <Equation math="200\%" /> verjetnost! Problem je,
                da lahko računamo razmerje med verjetnostima na ta način le,
                kadarje je spodnji dogodek nujen, oziroma kadar se zgornji ne
                more zgoditi brez spodnjega. A v našem primeru, se bo gotov
                dogodek zgodil tudi, če se ne zgodi dogodek{' '}
                <Equation math="A" />. Torej moramo pri računanju pogojne
                verjetnosti zgoranji dogodek najprej omejiti. In to najlažje
                storimo tako, da za števec uporabimo produkt obeh dogodkov
                (verjetnost, da se oba dogodka zgodita hkrati).
            </p>
            
            <Formula
                name="Pogojna verjetnost"
                math="P(A/B) = \frac{P(AB)}{P(B)}"
                params={{
                    'A/B': 'Dogodek A pri pogoju B',
                    'A': 'Dogodek, ki nas zanima',
                    'B': 'Dogodek, ki se bo gotovo zgodil',
                    'AB': 'Dogodek A omejen z dogodkom B'
                }}
            />
            
            <Diagram />
            
            <p>
                V zgornjem diagramu je vsota verjetnosti vsakega stolpca enaka
                {' '}<Equation math="1" />. Bolj zanimiva lastnost pa je ta, da
                je vsota vseh verjetnosti produktov nekega dogodka kar
                verjetnost tega dogodka. Torej, če seštejemo verjetnosti vseh
                dogodkov, ki vsebujejo <Equation math="B" />, dobimo kot rezultat
                natanko verjetnost dogodka <Equation math="B" />.
            </p>
            
            <Formula
                name="Vsota verjetnosti dogodkov"
                math="P(B) = \sum_{i=1}^n P(A_i B)"
                params={{
                    'A_i': 'Vsak od dogodkov (hipotez) A',
                    'B': 'Dogodek, ki nas zanima',
                    'n': 'Število dogodkov A'
                }}
            />
        </div>
    );
}

const subchapters = [
    BajesovObrazec,
    PrimerNaloge
];

export default createChapter(title, Chapter, subchapters);