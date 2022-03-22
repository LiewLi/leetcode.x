/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  if (A.length <= 1) return 0;
  A.sort((a, b) => a - b);
  if (A[0] + K >= A[A.length - 1] - K) {
    return 0;
  } else {
    return A[A.length - 1] - A[0] - 2 * K;
  }
};

console.log(smallestRangeI([3, 1, 10], 4));
