import math from '../math';

function Geometric(x, p) {
    return x < 1 ? 0 : p * math.pow(1 - p, x - 1);
}

window.math = math;

export default Geometric;