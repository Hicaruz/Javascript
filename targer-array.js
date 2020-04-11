var createTargetArray = function (nums = [], index = []) {
    let idx = index
    index.forEach(_ => {
        idx = upNum(idx)
        console.log(idx)

        const count = idx.reduce((ns, v) => ({ ...ns, [v]: ns[v] ? ++ns[v] : 1 }), {})
        idx = sameNum(idx, count)
        console.log(idx)
    })
    // const result = [...Array(nums.length)]
    // .map((num, idx) => {
    //     if(!num){
    //         console.log(num)
    //     }
    // })
};
const upNum = (array = []) => array.map((v, i) => array.indexOf(v) !== i ? ++v : v)
const sameNum = (array = [], count = {}) => array.map((v, i) => array.indexOf(v) === i && count[v] > 1 ? ++v : v)


console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))