var replaceElements = function (arr = []) {
    const results = []
    for (let k = 0; k < arr.length; k++) {
        const bigger = arr.slice(k + 1, arr.length).sort((a, b) => a - b).pop()
        results.push(bigger != undefined ? bigger : -1)
    }
    return results

};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))