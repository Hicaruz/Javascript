var countNegatives = function(grid) {
    const negatives = [].concat.apply([], grid).filter(n => n > 0)
    return negatives.length
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))