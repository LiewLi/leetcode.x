/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let maxLen = 0;
  let e = 0;
  let s = 0;
  while (e < A.length) {
    if (K > 0 || A[e]) maxLen = Math.max(maxLen, e - s + 1);
    if (A[e]) {
      e++;
    } else if (K <= 0) {
      while (K <= 0) {
        if (!A[s++]) {
          K++;
        }
      }
    } else {
      K--;
      e++;
    }
  }

  return maxLen;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
