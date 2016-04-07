import math from './math';

function *range(from, to) {
    if (to === undefined) {
        to = from;
        from = 0;
    }
    
    for (let i = from; i < to; i++) {
        yield i;
    }
}

export { math, range };