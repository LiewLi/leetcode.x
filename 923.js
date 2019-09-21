/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
    const mod = 1000000007
    let ret = 0
    A.sort((a, b) => a-b)
    for (let i = 0; i < A.length; ++i) {
        const t = target - A[i]
        let j = i + 1
        let k = A.length - 1
        while (j < k) {
            if (A[j] + A[k] > t) {
                k--
            } else if (A[j] + A[k] < t) {
                j++
            } else if (A[j] != A[k]) {
                let left = 1
                let right = 1
                while (j+1 < k && A[j+1] == A[j]) {
                    j++
                    left++
                }

                while (k-1>j && A[k-1] == A[k]) {
                    k--
                    right++
                }

                ret += left * right
                ret %= mod

                k--
                j++
            } else {
                ret += (k-j+1)*(k-j) / 2
                ret %= mod
                break
            }
        }
    }

    return ret
};