function countdown(n) {
    return create([], n)
}

function rangeOfNumbers(startNum, endNum) {
    return create([], endNum, startNum)
};
function create(array, n) {
    if (n < 1) {
        return array.reverse()
    }
    array.push(n)
    return create(array, --n)
}

console.log(countdown(10))