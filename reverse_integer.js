
const reverse = x => {
    const num = x.toString().replace('-','').split('').reverse().join('')
    if(+num > 2 ** 31 || -num < -(2**31))return 0
    
    return x > 0 ? +num : -num
};

console.log(reverse(-234))

