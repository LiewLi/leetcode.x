/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  if (A.length <= 1) return 0;
  A.sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 1; i < A.length; ++i) {
    cnt += A[i] > A[i - 1] ? 0 : A[i - 1] + 1 - A[i];
    A[i] = Math.max(A[i], A[i - 1] + 1);
  }
  return cnt;
};
