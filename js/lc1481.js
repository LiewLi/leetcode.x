/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const map = {};
  for (const a of arr) {
    map[a] = (map[a] || 0) + 1;
  }

  const numArr = [];
  for (const [, val] of Object.entries(map)) {
    numArr.push(val);
  }
  numArr.sort((a, b) => a - b);
  for (let i = 0; i < numArr.length; ++i) {
    if (k >= numArr[i]) {
      k -= numArr[i];
    } else {
      return numArr.length - i;
    }
  }
  return 0;
};

module.exports = findLeastNumOfUniqueInts;
