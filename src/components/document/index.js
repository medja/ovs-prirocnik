import React, { Component, PropTypes } from 'react';

import Chapters from 'chapters';

import style from './style.css';

class Document extends Component {
    
    componentWillMount() {
        document.title = this.props.shortTitle;
    }
    
    chapters = Chapters;
    
    render() {
        const { title, subtitle } = this.props;
        
        return (
            <div className={style.document}>
                <header className={style.title}>
                    <h1>{ title }</h1>
                    <p>{ subtitle }</p>
                </header>
                
                <section className={style.index}>
                    <h3>Kazalo</h3>
                    { this.renderIndex() }
                </section>
                
                <main>
                    { this.renderChapters() }
                </main>
            </div>
        );
    }
    
    renderIndex(chapters = this.chapters) {
        if (chapters.length === 0) {
            return null;
        }
        
        return (
            <ol>
                { chapters.map(::this.renderIndexEntry) }
            </ol>
        );
    }
    
    renderIndexEntry(Chapter) {
        const { id, title, subchapters } = Chapter;
        
        return (
            <li key={id} className={style.indexEntry}>
                <a href={`#${id}`}>{ title }</a>
                { this.renderIndex(subchapters) }
            </li>
        );
    }
    
    renderChapter(Subchapter) {
        return (
            <Subchapter key={Subchapter.id} />
        );
    }
    
    renderChapters() {
        return this.chapters.map(::this.renderChapter);
    }
    
}

export default Document;