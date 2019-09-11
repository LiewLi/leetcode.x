/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let b = n & 1
    n >>= 1
    while (n) {
        if ((n & 1) == b) return false
        b = n & 1
        n >>= 1
    }

    return true
};

console.log(hasAlternatingBits(4))