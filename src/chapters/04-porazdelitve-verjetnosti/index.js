import React from 'react';

import { createChapter } from 'components/chapter';

import FunkcijaGostote from './01-funkcija-gostote';
import PorazdelitvenaFunkcija from './02-porazdelitvena-funkcija';
import DiskretnePorazdelitve from './03-diskretne-porazdelitve';
import ZveznePorazdelitve from './04-zvezne-porazdelitve';

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
    FunkcijaGostote,
    PorazdelitvenaFunkcija,
    DiskretnePorazdelitve,
    ZveznePorazdelitve
];

export default createChapter(title, Chapter, subchapters);