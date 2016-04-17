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
                Zvezne porazdelitve so porazdelitve po realni množici. Pri njih
                je možen vsak izid znotraj nekega območja, ne le cela števila.
                Glavna razlika v primerjavi z diskretnimi porazdelitvami je
                torej ta, da ne moremo gledati samo nekega majhnega nabora
                verjetnosti, saj je teh neskončno. Zato tu operacije, ki
                vsebujejo vsoto, menjajo z integrali.
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