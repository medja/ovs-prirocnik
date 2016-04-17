import math from '../math';

function Normal(x, mu, sigma) {
    return math.exp(-1/2 * math.square((x - mu) / sigma)) / (sigma * math.sqrt(2 * math.pi));
}

export default Normal;