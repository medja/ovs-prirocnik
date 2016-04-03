import DefinicijeVerjetnosti from './01-definicije-verjetnosti';
import PogojnaVerjetnost from './02-pogojna-verjetnost';
import SlucajneSpremenljivke from './03-slucajne-spremenljivke';
import PorazdelitveVerjetnosti from './04-porazdelitve-verjetnosti';

function buildIndex(chapters, index = [1], parents = []) {
    return chapters.map(Chapter => {
        Chapter.id = `${parents.join('/')}/${Chapter.id}`;
        Chapter.title = `${index.join('.')}. ${Chapter.title}`;
        
        Chapter.level = index.length + 1;
        
        Chapter.subchapters = buildIndex(
            Chapter.subchapters,
            [...index, 1],
            [...parents, Chapter.id]);
        
        index = [...index.slice(0, -1), index.slice(-1)[0] + 1];
        
        return Chapter;
    });
}

export default buildIndex([
    DefinicijeVerjetnosti,
    PogojnaVerjetnost,
    SlucajneSpremenljivke,
    PorazdelitveVerjetnosti
]);