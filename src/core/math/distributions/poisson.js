import math from '../math';

function Poisson(x, _lambda) {
    return x < 0 ? 0 : math.pow(_lambda, x) / math.exp(_lambda) / math.factorial(x);
}

export default Poisson;