import math from '../math';

function Gamma(x, alpha, beta) {
    return x < 0 ? 0 : math.pow(beta, alpha) * math.pow(x, alpha - 1) / math.gamma(alpha) / math.exp(beta * x);
}

export default Gamma;