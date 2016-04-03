import React from 'react';

import style from './diagram.css';

function Event(props) {
    return (
        <span className={style.event}>
            { props.name.match(/[_!#]?\w/g).map(renderSymbol) }
        </span>
    );
}

function renderSymbol(symbol) {
    const type = symbol.substr(0, 1);
    const value = symbol.substr(-1);
    
    if (type == '#') {
        return null;
    }
    
    const className = do {
        if (type == '_') style.subscript;
        else if (type == '!') style.overline;
    };
    
    return <span key={symbol} className={className}>{ value }</span>;
}

export default Event;