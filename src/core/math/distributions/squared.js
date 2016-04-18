import Gamma from './gamma';

function Squared(x, n) {
    return Gamma(x, n/2, 1/2);
}

export default Squared;