import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';

const title = 'Klasična verjetnost';

function Chapter() {
    return (
        <div>
            <p>
                O klasični definiciji verjetnosti govorimo, ko imamo podan model
                {' '}<strong>verjetnostnega prostora</strong>{' '}
                <Equation math="S = \left\{ E_1, E_2, \ldots E_s \right\}" />.
            </p>
            
            <p>
                Ta verjetnostni prostor je navadno popoln sistem elementarnih
                dogodkov. Kar ni nič drugega kot množica med seboj nezdružljivh
                dogodkov, ki pokrivajo vse možne izdide.
            </p>
            
            <p>
                A ker za elementarne dogodke že poznamo njihove verjetnosti z
                njimi ni zabavno računati. Dodogki s katerimi se srečamo ponavadi
                so sestavljeni dogodki. To so kombinacije vsot in produktov
                drugih dogodkov. A k sreči si pri računanju njihovih verjetnosti
                lahko pomagamo z nekaj aksiomi.
            </p>
            
            <Formula
                name="Pravili o vsebovanosti"
                math={[
                    'A \\subseteq B \\Rightarrow P(A) \\leq P(B)',
                    'A \\subseteq B \\Rightarrow P(AB) = P(A)'
                ]}
            />
            
            <Formula
                name="Pravilo o komplimentu"
                math="P(\overline{A}) = 1 - P(A)"
            />
            
            <Formula
                name="Pravilo o vsoti in nezdružljivosti"
                math="P(A + B) = P(A) + P(B)"
            />
            
            <Formula
                name="Pravilo o produktu in neodvisnosti"
                math="P(AB) = P(A) \cdot P(B)"
            />
        </div>
    );
}

export default createChapter(title, Chapter);