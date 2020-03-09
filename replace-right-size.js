var replaceElements = function(arr = []) {
    return arr.map((_, k) => {
           const bigger = [...arr].slice(k + 1, arr.length).sort((a, b) => a - b).pop()
            return bigger != undefined ? bigger : -1
        }) 
    
     
};

console.log(replaceElements([17,18,5,4,6,1]))