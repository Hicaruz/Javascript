var lengthOfLongestSubstring = function (s) {
    const results = []
    for (let substring = 0; substring < s.length; substring++) {
        const characters = s.substring(0, s.length - substring).split('')
        characters
        unique = [...new Set(characters)]
        unique
        unique.length === characters.length && results.push(characters)
    }
    return results.reduce((a, b) => a.length > b.length ? a : b, []).join('')
}

console.log(lengthOfLongestSubstring("pwwkew"))