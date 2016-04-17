function Uniform(x, ...args) {
    return args.length > 1 ? Continuous(x, ...args) : Discrete(x, ...args);
}

function Discrete(x, n) {
    return x < 1 || x > n ? 0 : 1 / n;
}

function Continuous(x, a, b) {
    return x < a || x > b ? 0 : 1 / (b - a);
}

export default Uniform;