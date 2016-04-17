import math from '../math';

function Exponential(x, lambda) {
    return x < 0 ? 0 : lambda / math.exp(x * lambda);
}

export default Exponential;