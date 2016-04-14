function Uniform(x, n) {
    return x < 1 || x > n ? 0 : 1 / n;
}

export default Uniform;