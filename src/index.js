import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/base.css';
import 'styles/fonts.css';
import 'styles/katex.css';

import Document from 'components/document';

const title = 'Priročnik za Osnove Verjetnosti in Statistike';
const subtitle = 'Organiziran vodič metanja kocke.';
const shortTitle = 'OVS Priročnik';

ReactDOM.render((
    <Document title={title} subtitle={subtitle} shortTitle={shortTitle} />
), document.getElementById('app'));
