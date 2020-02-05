/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
  const ret = [];
  let s = 0;
  let e = 0;

  let maxEle = Number.MIN_SAFE_INTEGER;
  while (s < A.length) {
    maxEle = Math.max(A[e], maxEle);
    if (maxEle < L) {
      e++;
    } else if (maxEle > R) {
      if (e > s + 1) {
        e = ++s;
      } else {
        s = ++e;
      }
      maxEle = A[e];
    } else {
      ret.push(A.slice(s, e + 1));
      e++;
    }
    if (e >= A.length) {
      e = ++s;
      maxEle = A[e];
    }
  }

  return ret.length;
};

console.log(
  numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69)
);
