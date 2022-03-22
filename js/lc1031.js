/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  const _ = A => {
    const arr = [];
    let sum = 0;
    for (let i = A.length - 1; i >= 0; --i) {
      if (i + M < A.length) {
        sum -= A[i + M];
      }
      sum += A[i];
      arr[i] = Math.max(arr[i + 1] || 0, sum);
    }

    let max = 0;
    for (let s = 0, j = 0, maxSoFar = 0; j < A.length; ++j) {
      if (j >= L) s -= A[j - L];
      s += A[j];
      maxSoFar = Math.max(maxSoFar, s);
      if (j + 1 < A.length) {
        max = Math.max(max, maxSoFar + arr[j + 1]);
      }
    }

    return max;
  };
  return Math.max(_(A), _(A.reverse()));
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2));
