import React from 'react';

import style from './style.css';

function Group(props) {
    return (
        <div className={style.group}>
            { props.children }
        </div>
    );
}

export default Group;