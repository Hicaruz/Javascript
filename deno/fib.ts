const fib_recur = (n:number):number => {
    if (n == 1 || n == 2)
        return 1
    return fib_recur(n - 1) + fib_recur(n - 2)
}

const n = 10
console.time('time')
console.log(fib_recur(n))
console.timeEnd('time')

