/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let cnt = 0
    let prevRL = 0
    let curRL = 1
    for (let i = 1; i < s.length; ++i) {
        if (s[i] == s[i-1]) {
            curRL++
        } else {
            prevRL = curRL
            curRL = 1
        }

        if (prevRL >= curRL) cnt++
    }

    return cnt
};

console.log( countBinarySubstrings("00110"))