/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let res = 0;
  const arr = Array(strs.length).fill(0);
  for (let i = 0; i < strs[0].length; ++i) {
    let sorted = true;
    for (let j = 1; j < strs.length; ++j) {
      const right = arr[j] * 26 + strs[j].charCodeAt(i) - "a".charCodeAt(0);
      const left =
        arr[j - 1] * 26 + strs[j - 1].charCodeAt(i) - "a".charCodeAt(0);
      if (left <= right) {
        continue;
      }
      ++res;
      sorted = false;
      break;
    }
    if (sorted) {
      arr.forEach((a, idx) => {
        arr[idx] = a * 26 + strs[idx].charCodeAt(i) - "a".charCodeAt(0);
      });
    }
  }
  return res;
};

module.exports = minDeletionSize;
