import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';

const title = 'Bayesov obrazevc';

function Chapter() {
    const bayesFrac = [
        'P(B/A_k) \\cdot P(A_k)',
        '\\sum P(B/A_i) \\cdot P(A_i)'
    ];
    
    const bayes = `P(A_k/B) = \\frac{${bayesFrac[0]}}{${bayesFrac[1]}}`;
    
    return (
        <div>
            <p>
                Medtem, ko je z zgornjimi formulami mogoče izračunati vse mogoče
                verjetnosti, pa včasih pride tudi kakšen izpeljan obrazec. Z
                Bayesovim obrazcem je mogoče izračunati pogojno verjetnost na
                eni strani diagrama z vrednostmi iz druge strani diagrama.
            </p>
            
            <Formula
                name="Bayesov obrazec"
                math={bayes}
                params={{
                    'A_i': 'Dogodki, ki jih poznamo',
                    'B': 'Dogodek, ki ga ne poznamo',
                    'B/A_i': 'Dogodek B pri pogoju A'
                }}
            />
            
            <p>
                Ta obrazec ni nič drugega kot formula za pogojno verjetnost.
                Števec obrazca predstavlja obrnjena formula pogojne verjetnosti,
                kjer sta dogodka pogojena ravno obratno:{' '}
                <Equation math="P(A_k B)" />. Imenovalec obrazca pa predstavlja
                vsota verjetnosti produktov dogodkov, ki se sešteje ravno v
                dogodek, s katerim je prvotni dogodek omejen:{' '}
                <Equation math="P(B)" />.
            </p>
        </div>
    );
}

export default createChapter(title, Chapter);