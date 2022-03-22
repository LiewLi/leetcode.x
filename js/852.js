/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  for (let i = 1; i < A.length; ++i) {
    if (A[i] < A[i - 1]) {
      return i - 1;
    }
  }
  return 0;
};

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
