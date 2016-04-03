import React from 'react';

import { createChapter } from 'components/chapter';

import Formula from 'components/formula';

import Comparion from './comparison';

const title = 'Geometrijska verjetnost';

function Chapter() {
    return (
        <div>
            <p>
                O geometrijski definiciji verjetnosti govorimo takrat, ko delamo
                z neko vizualno predstavitvijo verjetnosti dogodkov. Z njo si
                lahko pomagamo predstavljati prepletanje dogodkov. Bistvo
                geometrijske predstavitve je namreč to, da z njo opazujemo{' '}
                <strong>razmerja ploščin</strong> verjetnosti različnih dogodkov.
            </p>
            
            <Formula
                name="Razmerje ploščin verjetnosti"
                math="\frac{P(A)}{P(B)}"
                params={{
                    'A': 'Temno modro področje',
                    'B': 'Celotno obarvano področje'
                }}
            />
            
            <Comparion />
        </div>
    );
}

export default createChapter(title, Chapter);