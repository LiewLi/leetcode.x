/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
  arr.sort((a, b) => a - b);
  let maxSoFar = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > maxSoFar) {
      maxSoFar++;
    }
  }
  return maxSoFar;
};

module.exports = maximumElementAfterDecrementingAndRearranging;
