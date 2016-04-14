import math from '../math';

function Poisson(x, lambda) {
    return x < 0 ? 0 : math.pow(lambda, x) / math.exp(lambda) / math.factorial(x);
}

export default Poisson;