/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const cmp = (a, b) => a - b;
  A.sort(cmp);
  B.sort(cmp);
  C.sort(cmp);
  D.sort(cmp);

  let ret = 0;
  const map = {};
  for (let i = 0; i < A.length; ++i) {
    for (let j = 0; j < B.length; ++j) {
      map[A[i] + B[j]] = (map[A[i] + B[j]] || 0) + 1;
    }
  }

  for (let i = 0; i < C.length; ++i) {
    for (let j = 0; j < D.length; ++j) {
      ret += map[-C[i] - D[j]] || 0;
    }
  }

  return ret;
};
