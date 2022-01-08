module.exports = function reverse (n) {
    let revN = Math.abs(n).toString().split('').reverse().join('');
    return Number(revN);
}
