/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
    let cnt = 0
    for (let k = L; k <= R; ++k) {
        let bit = 0
        let n = k
        while (n) {
            if (n & 0x01) bit++
            n >>= 1
        }
        if (primes.includes(bit)) {
            cnt++
        }
    }

    return cnt
};

console.log(countPrimeSetBits(6, 10))