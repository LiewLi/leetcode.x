/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for (let i = 0; i < A.length; ++i) {
        for (let j = i; j < A.length; ++j) {
            if ((A[j] & 1) == (i & 1)) {
                let t = A[i]
                A[i] = A[j]
                A[j] = t
                break
            }
        }
    }
    return A
};

console.log(sortArrayByParityII([3, 4]))