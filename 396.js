/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  let base = 0;
  let sum = 0;
  for (let i = 0; i < A.length; ++i) {
    base += i * A[i];
    sum += A[i];
  }
  let maxN = base;

  for (let i = 0; i < A.length; ++i) {
    base += sum;
    base -= A.length * A[A.length - 1 - i];
    if (base > maxN) maxN = base;
  }

  return maxN;
};
