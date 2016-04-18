import math from '../math';

function Cauchy(x, x0, gamma) {
    return 1 / (math.pi * gamma * (1 + math.pow((x - x0) / gamma, 2)))
}

export default Cauchy;