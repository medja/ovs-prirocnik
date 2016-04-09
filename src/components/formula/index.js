import React from 'react';

import LaTeX from 'components/latex';

import Group from './group';
import style from './style.css';

function Formula(props) {
    const formulas = [].concat(props.math);
    
    return (
        <div className={style.box}>
            <p className={style.formula}>
                { name(props.name) }
                { formulas.map((math, i) => (
                    <LaTeX key={i} math={math} />
                )) }
                { params(props.params) }
            </p>
        </div>
    );
}

Formula.Group = Group;

function name(name) {
    if (!name || name.length == 0) {
        return null;
    }
    
    return (
        <span className={style.name}>{ name }</span>
    );
}

function params(params) {
    if (!params || Object.keys(params).length == 0) {
        return null;
    }
    
    return Object.entries(params).map(([key, value]) => (
        <span key={key} className={style.definition}>
            <LaTeX math={key} inline />: { value }
        </span>           
    ));
}

export default Formula;