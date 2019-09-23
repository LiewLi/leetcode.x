/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  let maxN = 0;
  for (let i = 0; i < A.length; ++i) {
    for (let j = i + 1; j < A.length; ++j) {
      let f = A[i] + A[j];
      let low = j + 1;
      let high = A.length - 1;
      let cnt = 2;
      let s = i;
      let t = j;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (A[mid] == f) {
          idx = -1;
          cnt += 1;
          f = A[mid] + A[t];
          s = t;
          t = mid;
          low = mid + 1;
          high = A.length - 1;
        } else if (A[mid] > f) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      maxN = cnt >= 3 ? Math.max(maxN, cnt) : maxN;
    }
  }

  return maxN;
};
