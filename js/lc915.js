/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  const minArr = [];
  let minV = Number.MAX_SAFE_INTEGER;
  for (let i = A.length - 1; i >= 0; --i) {
    minV = Math.min(minV, A[i]);
    minArr[i] = minV;
  }
  let maxV = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < A.length; ++i) {
    maxV = Math.max(maxV, A[i]);
    if (i >= A.length - 1 || maxV <= minArr[i + 1]) {
      return i + 1;
    }
  }
};

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
