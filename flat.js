flat = (depth = 2)  => {
    return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
    }, []);
}

const flattenReducer = arr => arr.reduce((accumulator, currentValue) => {
    Array.isArray(currentValue) ?
        flattenReducer(currentValue).forEach(element => accumulator.push(element)) :
        accumulator.push(currentValue)
    return accumulator
}, [])

const test_array = ["level 1", ["level 2", ["level 3"]]]
console.log(test_array.flat())
console.log(flattenReducer(test_array))

