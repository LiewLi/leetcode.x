/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  let down = 1;
  let up = 1;
  let maxN = 1;
  for (let i = 1; i < A.length; ++i) {
    if (A[i] > A[i - 1]) {
      up = down + 1;
      down = 1;
    } else if (A[i] < A[i - 1]) {
      down = up + 1;
      up = 1;
    } else {
      down = 1;
      up = 1;
    }
    maxN = Math.max(maxN, Math.max(down, up));
  }

  return maxN;
};

console.log(maxTurbulenceSize([2, 0, 2, 4, 2, 5, 0, 1, 2, 3]));
