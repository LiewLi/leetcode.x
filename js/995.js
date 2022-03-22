/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  let cnt = 0;
  for (let i = 0; i < A.length; ++i) {
    if (!A[i]) {
      if (i + K > A.length) return -1;
      cnt++;
      for (let j = i; j < i + K; ++j) {
        A[j] = 1 - A[j];
      }
    }
  }
  return cnt;
};

console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3));
