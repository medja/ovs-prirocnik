import React from 'react';

import { Group, Rectangle, Surface, Text } from 'components/graphics';
import Equation from 'components/equation';

import style from './comparison.css';

function Comparion() {
    return (
        <div className={style.comparison}>
            <Original />
            <Equation math="\Rightarrow" className={style.text} />
            <Constrained />
        </div>
    );
}

function Original() {
    const rightSide = { textAnchor: 'end', visibility: 'visible' };
    
    return (
        <Surface className={style.original}>
            <Group className={style.block}>
                <Rectangle width="100" height="100" fill="#ffffff" strokeWidth="2" />
                <Text x="92" y="4" style={rightSide}>G</Text>
            </Group>
            <Group className={style.block}>
                <Rectangle width="50" height="100" fill="#5c90d2" strokeWidth="2" />
                <Text x="8" y="4">B/G</Text>
            </Group>
            <Group className={style.block} y="50">
                <Rectangle width="50" height="50" fill="#4d659f" strokeWidth="2" />
                <Text x="8" y="4">A/G</Text>
            </Group>
        </Surface>
    );
}

function Constrained() {
    return (
        <Surface width="50" className={style.constrained}>
            <Group className={style.block}>
                <Rectangle width="50" height="100" fill="#5c90d2" strokeWidth="2" />
                <Text x="8" y="4">B/B</Text>
            </Group>
            <Group className={style.block} y="50">
                <Rectangle width="50" height="50" fill="#4d659f" strokeWidth="2" />
                <Text x="8" y="4">A/B</Text>
            </Group>
        </Surface>
    );
}

export default Comparion;