var divide = function (dividend, divisor) {
    let [adividend, mdivisor, n] = [Math.abs(dividend), Math.abs(divisor), 0]
    for (let i = mdivisor - 1; i <= adividend; i += mdivisor) { n++ }
    return adividend === dividend && mdivisor === divisor
        || divisor < 0 && dividend < 0
        ? +n : -n
}

console.log(divide(-21474836, -1))