import React from 'react';

import { createChapter } from 'components/chapter';

import EnakomernaPorazdelitev from './01-enakomerna-porazdelitev';
import BinomskaPorazdelitev from './02-binomska-porazdelitev';
import GeometrijskaPorazdelitev from './03-geometrijska-porazdelitev';
import PascalovaPorazdelitev from './04-pascalova-porazdelitev';
import PoissonovaPorazdelitev from './05-poissonova-porazdelitev';
import HipergeometrijskaPorazdelitev from './06-hipergeometrijska-porazdelitev';

const title = 'Porazdelitve verjetnosti';

function Chapter() {
    return (
        <div>
            <p>
                Slučajne spremenljivke so izredno močne in nas rešijo in nas
                rešijo velikega števila podobnih dogodkov. A postanejo zahtevne,
                ko delamo z veliko različnimi možnimi izidi. Pri tem si lahko
                pomagamo z uporabo ustrezne standardne porazdelitve, ki nam ne
                omogoča le računanje verjetnosti slučajev temveč tudi krajše
                formule za računanje pričakovane vrednosti.
            </p>
        </div>
    );
}

const subchapters = [
    EnakomernaPorazdelitev,
    BinomskaPorazdelitev,
    GeometrijskaPorazdelitev,
    PascalovaPorazdelitev,
    PoissonovaPorazdelitev,
    HipergeometrijskaPorazdelitev
];

export default createChapter(title, Chapter, subchapters);