import math from '../math';

function Hypergeometric(x, n, M, N) {
    return x < 0 ? 0 : math.binomial(M, x) * math.binomial(N - M, n - x) / math.binomial(N, n);
}

export default Hypergeometric;