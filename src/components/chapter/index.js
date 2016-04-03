import React, { Component, PropTypes, createElement } from 'react';
import { remove as normalize } from 'diacritics';

import style from './style.css';

class Chapter extends Component {
    
    render() {
        const { id, title, level, Content, subchapters } = this.constructor;
        
        return (
            <section id={id}>
                { this.renderTitle(id, title, level) }
                <Content />
                { this.renderSubchapters(subchapters) }
            </section>
        );
    }
    
    renderTitle(id, title, level) {
        const { Title } = this.constructor.props;
        
        const link = (
            <a href={`#${id}`} className={style.title}>
                { Title ? (<Title title={title} />) : title }
            </a>
        );
        
        return createElement(`h${level}`, {}, link);
    }
    
    renderSubchapter(Subchapter) {
        return (
            <Subchapter key={Subchapter.id} />
        );
    }
    
    renderSubchapters(subchapters) {
        return subchapters.map(::this.renderSubchapter);
    }
    
}

function createId(title) {
    return normalize(title).toLowerCase().replace(/\s/g, '-');
}

function createDisplayName(title) {
    const normalized = normalize(title).toLowerCase();
    const name = normalized.replace(/\s(\w)/g, (_, char) => char.toUpperCase());
    return name[0].toUpperCase() + name.substr(1);
}

function createChapter(title, Content, subchapters = [], props = {}) {
    class Section extends Chapter {
        static displayName = createDisplayName(title);
        static id = createId(title);
        
        static title = title;
        static Content = Content;
        static subchapters = subchapters;
        
        static props = props;
    }
    
    return Section;
}

export default Chapter;
export { createChapter };