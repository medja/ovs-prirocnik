import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';

const title = 'Hi-kvadrat porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="X^2 (n)" />
        </span>
    );
}

function Chapter() {
    return (
        <div>
            <p>
                ...
            </p>
        </div>
    );
}

export default createChapter(title, Chapter, [], { Title });