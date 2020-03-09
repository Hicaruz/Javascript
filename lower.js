/**
 * @param {string} str
 * @return {string}
 */
var repeatedNTimes = function(A = []) {
    for(let k = 0; k < A.length; k++){
        if(A.indexOf(A[k]) !== k){
            return A[k]
        }
    }
}
console.log(repeatedNTimes([1,2,3,3]))