const forEachWhile = (array, predicate, action) => {
    for(let index = 0; index < array.length; index++){
        const item = array[index]
        if(!predicate(item, index, array)){
            return
        }
        action(item, index, array)
    }
}
Array.prototype.forEachWhile = function(predicate, action){
    return forEachWhile(this, predicate, action)

}
const nunbers = [...Array(10)].map((_, i) => i + 1)
const filter = number => number <= 5

nunbers.forEachWhile(filter, nunber => {
    console.log(nunber)
})

