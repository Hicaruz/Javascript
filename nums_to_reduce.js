var numberOfSteps = function (num) {
    const steps = []
    while (num !== 0) {
        num = num % 2 == 0 ? num / 2 : num - 1
        steps.push(num)
    }
    return steps.length
};

console.log(numberOfSteps(123))