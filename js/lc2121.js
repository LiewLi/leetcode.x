/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
  const map = {};
  const res = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; ++i) {
    (map[arr[i]] = map[arr[i]] || []).push(i);
  }

  for (const arr of Object.values(map)) {
    if (arr.length <= 1) continue;
    const prefixSumArr = Array(arr.length).fill(0);
    for (let j = 1; j < arr.length; ++j) {
      const d = arr[j] - arr[j - 1];
      prefixSumArr[j] = prefixSumArr[j - 1] + j * d;
    }
    const sufixSumArr = Array(arr.length).fill(0);
    for (let j = arr.length - 2; j >= 0; --j) {
      const d = arr[j + 1] - arr[j];
      sufixSumArr[j] = sufixSumArr[j + 1] + (arr.length - 1 - j) * d;
    }
    for (let j = 0; j < arr.length; ++j) {
      res[arr[j]] = prefixSumArr[j] + sufixSumArr[j];
    }
  }

  return res;
};

module.exports = getDistances;
