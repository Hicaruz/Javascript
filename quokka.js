
var reverse = function(x) {
    const num = x.toString().replace('-','').split('').reverse().join('')
    return x > 0 ? +num : -num
};

console.log(reverse(-234))