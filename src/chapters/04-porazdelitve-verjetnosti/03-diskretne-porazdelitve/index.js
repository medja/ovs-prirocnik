import React from 'react';

import { createChapter } from 'components/chapter';

import BinomskaPorazdelitev from './01-binomska-porazdelitev';
import GeometrijskaPorazdelitev from './02-geometrijska-porazdelitev';
import PascalovaPorazdelitev from './03-pascalova-porazdelitev';
import HipergeometrijskaPorazdelitev from './04-hipergeometrijska-porazdelitev';
import PoissonovaPorazdelitev from './05-poissonova-porazdelitev';

const title = 'Diskretne porazdelitve';

function Chapter() {
    return (
        <div>
            <p>
                ...
            </p>
        </div>
    );
}

const subchapters = [
    BinomskaPorazdelitev,
    GeometrijskaPorazdelitev,
    PascalovaPorazdelitev,
    HipergeometrijskaPorazdelitev,
    PoissonovaPorazdelitev
];

export default createChapter(title, Chapter, subchapters);