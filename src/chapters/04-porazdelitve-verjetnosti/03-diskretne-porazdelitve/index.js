import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';

import EnakomernaPorazdelitev from './01-enakomerna-porazdelitev';
import BinomskaPorazdelitev from './02-binomska-porazdelitev';
import GeometrijskaPorazdelitev from './03-geometrijska-porazdelitev';
import PascalovaPorazdelitev from './04-pascalova-porazdelitev';
import HipergeometrijskaPorazdelitev from './05-hipergeometrijska-porazdelitev';
import PoissonovaPorazdelitev from './06-poissonova-porazdelitev';

const title = 'Diskretne porazdelitve';

function Chapter() {
    return (
        <div>
            <p>
                Diskretne porazdelitve so porazdeljene po neki števni množici,
                recimo od <Equation math="1" /> do <Equation math="10" />. To
                pomeni, da so možni izidi vedno ena izmed vnaprej določenih
                vrednosti.
            </p>
        </div>
    );
}

const subchapters = [
    EnakomernaPorazdelitev,
    BinomskaPorazdelitev,
    GeometrijskaPorazdelitev,
    PascalovaPorazdelitev,
    HipergeometrijskaPorazdelitev,
    PoissonovaPorazdelitev
];

export default createChapter(title, Chapter, subchapters);