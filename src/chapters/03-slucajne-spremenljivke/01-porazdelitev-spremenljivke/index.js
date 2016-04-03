import React from 'react';

import { createChapter } from 'components/chapter';
import Formula from 'components/formula';

const title = 'Porazdelitev slučajne spremenljivke';

function Chapter() {
    const variables = '1 & 2 & ... & i & ... & n';
    const probabilities = '1/2 & 1/4 & ... & p_i & ... & p_n';
    
    const table = `
        X \\sim \\left(\\begin{array}{c}
            ${variables}\\\\ ${probabilities}
        \\end{array}\\right)
    `;
    
    return (
        <div>
            <p>
                Da s slučajnimi spremenljivkami lažje računamo, pogosto pride
                prav definicija te s pomočjo verjetnostne tabele. V njeni
                zgornji vrstici navedemo slučaje, v spodnji pa njihove
                pripadajoče verjetnosti.
            </p>
            
            <Formula
                name="Verjetnostna tabela"
                math={[
                    table,
                    '\\sum_{i=1}^n p_i = 1'
                ]}
                params={{
                    'i': 'Slučaj oziroma izid',
                    'p_i': 'Verjetnost slučaja'
                }}
            />
            
            <p>
                S pomočjo takšne tabele pa je mogoče tudi izračunati pričakovano
                vrednost oziroma matematično upanje neke slučajne spremenljivke.
                Ta vrednost ni nič drugega kot izid, ki je od vseh najbolj verjeten.
            </p>
            
            <Formula
                name="Pričakovana vrednost"
                math="E(X) = \sum_{i=1}^n i \cdot p_i"
                params={{
                    'i': 'Slučaj oziroma izid',
                    'p_i': 'Verjetnost slučaja'
                }}
            />
        </div>
    );
}

export default createChapter(title, Chapter);