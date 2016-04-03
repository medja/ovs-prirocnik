import React from 'react';

import { createChapter } from 'components/chapter';
import Equation from 'components/equation';

const title = 'Binomska porazdelitev';

function Title(props) {
    return (
        <span>
            { props.title }{' '}
            <Equation math="B(n, p)" />
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