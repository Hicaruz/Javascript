const fib_recur = n => {
    if (n == 1 || n == 2)
        return 1
    return fib_recur(n - 1) + fib_recur(n - 2)
}

const fib_memo = (n, memo) => {
    if (memo[n])
        return memo[n]
    if (n == 1 || n == 2)
        return 1
    const result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return result
}


const n = 10
console.time('time')
console.log(fib_recur(n))
console.timeEnd('time')

console.time('time')
console.log(fib_memo(n, []))
console.timeEnd('time')