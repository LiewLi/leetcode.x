/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    const s = '' + N
    const sArr = s.split('')
    let idx = sArr.length
    for (let i = sArr.length-1; i > 0; --i) {
        if (sArr[i] < sArr[i-1]) {
            idx = i
            sArr[i-1] = '' + ((+sArr[i-1]) - 1)
        }
    }
    let ret = sArr.slice(0, idx).join('')
    for (let i = idx; i < s.length; ++i) {
        ret += '9'
    }
    return +ret
};

console.log(monotoneIncreasingDigits(332))