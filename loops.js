const length = 150
const indexes = [...Array(length)].map((_, i) => length - i)
for(index of indexes){
    console.log(index)
}