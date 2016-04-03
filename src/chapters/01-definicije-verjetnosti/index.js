import React from 'react';

import { createChapter } from 'components/chapter';

import KlasicnaVerjetnost from './01-klasicna-verjetnost';
import StatisticnaVerjetnost from './02-statisticna-verjetnost';
import GeometrijskaVerjetnost from './03-geometrijska-verjetnost';

const title = 'Definicije verjetnosti';

function Chapter() {
    return (
        <div>
            <p>
                Verjetnost znamo definirati na tri različne načine. Vsak od njih
                je drugačen in ima svoje prednosti. A kljub njihovim razlikam so
                v resnici vsi trije med seboj ekvivalentni.
            </p>
        </div>
    );
}

const subchapters = [
    KlasicnaVerjetnost,
    StatisticnaVerjetnost,
    GeometrijskaVerjetnost
];

export default createChapter(title, Chapter, subchapters);