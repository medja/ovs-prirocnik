import math from '../math';

function Binomial(x, n, p) {
    return x < 0 ? 0 : math.binomial(n, x) * math.pow(p, x) * math.pow(1 - p, n - x);
}

export default Binomial;