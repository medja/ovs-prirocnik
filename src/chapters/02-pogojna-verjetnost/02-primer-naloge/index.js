import React from 'react';

import { createChapter } from 'components/chapter';

const title = 'Primer naloge';

function Chapter() {
    return (
        <div>
            <p>
                ...
            </p>
        </div>
    );
}

export default createChapter(title, Chapter);