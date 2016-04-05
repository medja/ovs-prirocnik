import React from 'react';

import { createChapter } from 'components/chapter';

import EnakomernaPorazdelitev from './01-enakomerna-porazdelitev';
import NormalnaPorazdelitev from './02-normalna-porazdelitev';
import PoissonovaPorazdelitev from './03-poissonova-porazdelitev';
import EksponentnaPorazdelitev from './04-eksponentna-porazdelitev';
import GamaPorazdelitev from './05-gama-porazdelitev';
import HiKvadratPorazdelitev from './06-hi-kvadrat-porazdelitev';
import CauchyjevaPorazdelitev from './07-cauchyjeva-porazdelitev';

const title = 'Zvezne porazdelitve';

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
    EnakomernaPorazdelitev,
    NormalnaPorazdelitev,
    PoissonovaPorazdelitev,
    EksponentnaPorazdelitev,
    GamaPorazdelitev,
    HiKvadratPorazdelitev,
    CauchyjevaPorazdelitev
];

export default createChapter(title, Chapter, subchapters);