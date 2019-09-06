/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let c = 0
    while (n > 0) {
        if (n & 1) {
            if (++c > 1) {
                return false
            }
        }
        n >>= 1
    }
    return c == 1
};