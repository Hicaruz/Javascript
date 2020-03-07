var singleNumber = function (nums) {
    const counts = {}
    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1;
    }
    for (count in counts){
        if(counts[count] == 1){
            return count
        }
    }
};
console.log(singleNumber([3, 3, 3, 0, 0, 0, 4]))