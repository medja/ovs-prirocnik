import math from '../math';

function Pascal(x, m, p) {
    return x < m ? 0 : math.binomial(x - 1, m - 1) * math.pow(p, m) * math.pow(1 - p, x - m);
}

export default Pascal;