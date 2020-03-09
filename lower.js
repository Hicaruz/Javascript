/**
 * @param {string} str
 * @return {string}
 */
var repeatedNTimes = function(A = []) {
    let n 
    A.forEach((v, i) => {
         if(A.indexOf(v) !== i){
             n = v
             continue;
         }
    })
};
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))