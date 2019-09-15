/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a = s.split('').sort()
    let b = t.split('').sort()
    for (let i = 0; i < a.length; ++i) {
        if (b[i] !== a[i]) return b[i]
    }
    return b[s.length]
};

console.log(findTheDifference('abcd', 'abcde'))