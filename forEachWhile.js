const forEachWhile = (array, predicate, callback) => {
    for(let index = 0; index < array.length; index++){
        const item = array[index]
        if(!predicate(item, index, array)){
            return
        }
        callback(item, index, array)
    }
}
Array.prototype.forEachWhile = function(predicate, action){
    return forEachWhile(this, predicate, action)

}
const nunbers = [...Array(10)].map((_, i) => i + 1)
const condition = number => number <= 5

nunbers.forEachWhile(condition, nunber => {
    console.log(nunber)
})

