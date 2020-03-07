const subtractProductAndSum = n => {
    const { pro, sub } = [...n.toString()].reduce(({ pro, sub }, num) => ({
        pro: pro * (+ num),
        sub: sub + (+ num)
    }), { pro: 1, sub: 0 })
    return pro - sub
}
console.log(subtractProductAndSum(234))
