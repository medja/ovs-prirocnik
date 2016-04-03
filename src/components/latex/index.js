import React from 'react';
import katex from 'katex';

function LaTeX(props) {
    const options = {
        displayMode: !props.inline
    };
    
    const state = {
        dangerouslySetInnerHTML: {
            __html: katex.renderToString(props.math, options)
        },
        className: props.className
    };
    
    return (
        <span {...state} />
    );
}

export default LaTeX;