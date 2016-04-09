import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';
import Formula from 'components/formula';
import { Continuous, Discrete } from 'components/plot';

const title = 'Porazdelitvena funkcija';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="F(x)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                Porazdelitvena funkcija je tesno povezana s funkcijo gostote. Če
                smo pri funkciji gostote računali verjetnost nekega izida{' '}
                <Equation math="x" />, zdaj računamo vsoto vseh izidov manjših
                ali enakih <Equation math="x" />. Kot pri funkciji gostote nam
                za računanje s to funkcijo pri končnem številu izidov ni
                potrebno uporabiti nobene posebne formule. Samo sešteti moramo
                vse verjetnosti, ki ustrezajo pogoju, torej{' '}
                <Equation math="P(X \le x)" />. V nasprotnem primeru pa stvari
                postanejo nekoliko bolj zapletene.
            </p>
            
            <Formula
                name="Porazdelitvena funkcija (diskretna)"
                math="F(x) = \sum_{i=1}^x p(i)"
            />
            
            <p style={{ textAlign: 'center' }}>
                <Discrete
                    width="500" range={[0, 4]} selected={[0, 2]}
                    func="binomial(4, x) * (1 / 2)^4"
                />
            </p>
            
            <p>
                Pri diskretnih porazdelitvah funkcija predstavlja vsoto vseh
                verjetnosti do <Equation math="c" />. Ker je navadno prvi možni
                izid <Equation math="1" />, je to tudi spodnja meja zgornje
                vsote. Ta del vsote je po potrebi treba spremeniti, da ustreza
                sami porazdelitvi.
            </p>
            
            <Formula
                name="Porazdelitvena funkcija (zvezna)"
                math="F(x) = \int_{-\infty}^x p(t) dt"
            />
            
            <p style={{ textAlign: 'center' }}>
                <Continuous
                    width="500" range={[-1, 3]} selected={[-2, 1]}
                    func="exp(- x^2 / 2) / sqrt(2 * pi)"
                />
            </p>
            
            <p>
                Pri zveznih porazdelitvah funkcija predstavlja površino, ki si
                jo je mogoče predstavljati kot vsoto verjetnosti na neskončno
                majhnih intervalih.
            </p>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });