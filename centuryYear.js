function centuryFromYear(year) {
    const y =  year / 100
    const hasResidual = (y - Math.floor(y)) > 0
    return Math.floor(y) + (hasResidual ? 1 : 0) 
}
