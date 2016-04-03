import React from 'react';

import LaTeX from 'components/latex';

function Equation(props) {
    return <LaTeX math={props.math} className={props.className} inline />
}

export default Equation;