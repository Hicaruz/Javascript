const SECRET = `WTF`
const WTF = `console.log(SECRET)`

const func = (arr, n) => arr.reduce((t, v) => v === n ? ++t : t, 0)

console.log(func([1, 2, 3, 3], 3))