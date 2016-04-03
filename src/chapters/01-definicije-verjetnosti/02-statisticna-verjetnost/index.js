import React from 'react';

import { createChapter } from 'components/chapter';
import Formula from 'components/formula';

const title = 'Statistična verjetnost';

function Chapter() {
    return (
        <div>
            <p>
                O statistični definiciji verjetnosti govorimo takrat, ko stvari
                poskušamo v praksi. Ideja te je, da je <strong>pogostost ali
                frekvenca</strong>, s katero se poskus ponavlja, enaka njegovi
                verjetnosti.
            </p>
            
            <Formula
                name="Verjetnost dogodka je enaka njegovi frekvenci"
                math="P(A) = f = \frac{k}{n}"
                params={{
                    'A': 'Dogodek, ki ga opazujemo',
                    'f': 'Frekvenca ponavljanja dogodka',
                    'k': 'Število ponovitev dogodka',
                    'n': 'Število vseh poskusov'
                }}
            />
        </div>
    );
}

export default createChapter(title, Chapter);