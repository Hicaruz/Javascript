function doSomething(n) {
    return new Promise((resolve, _reject) =>{
        k = 0
        function repeat(){
            k++;
            if(k > 10){
                resolve(k)
            }
            repeat();
        }
        repeat()
    })
}
doSomething().then(x => console.log('x=', x))
console.log('k=', k)