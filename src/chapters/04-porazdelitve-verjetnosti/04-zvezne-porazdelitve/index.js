import React from 'react';

import { createChapter } from 'components/chapter';

import EnakomernaPorazdelitev from './01-enakomerna-porazdelitev';
import NormalnaPorazdelitev from './02-normalna-porazdelitev';
import EksponentnaPorazdelitev from './03-eksponentna-porazdelitev';
import GamaPorazdelitev from './04-gama-porazdelitev';
import HiKvadratPorazdelitev from './05-hi-kvadrat-porazdelitev';
import CauchyjevaPorazdelitev from './06-cauchyjeva-porazdelitev';

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
    EksponentnaPorazdelitev,
    GamaPorazdelitev,
    HiKvadratPorazdelitev,
    CauchyjevaPorazdelitev
];

export default createChapter(title, Chapter, subchapters);