const smallerNumbersThanCurrent = (nums) => {
    const result = Array(nums.length).fill(0)
    nums.forEach((value, index, elements) =>
        elements.forEach(item => value > item && result[index]++)
    )
    return result
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
    