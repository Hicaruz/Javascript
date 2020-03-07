var romanToInt = function (s) {
    const romans = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    let result = 0
    s.split("").forEach((_, idx) => {
        if (idx > 0 && romans[s[idx]] > romans[s[idx - 1]]) {
            result += (romans[s[idx]] - 2) * romans[s[idx - 1]]
        } else {
            result += romans[s[idx]]
        }
    })
    return result
};

console.log(romanToInt("IX"))