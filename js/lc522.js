/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length);
  const _is_subseq = (a, b) => {
    if (a.length > b.length) {
      return false;
    }
    let i = 0;
    let j = 0;
    for (; i < a.length && j < b.length; ++i) {
      while (j < b.length && b[j] != a[i]) ++j;
      ++j;
    }
    return i == a.length && j <= b.length;
  };
  for (let i = 0; i < strs.length; ++i) {
    let flag = true;
    for (let j = 0; j < strs.length; ++j) {
      if (i != j && _is_subseq(strs[i], strs[j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return strs[i].length;
    }
  }
  return -1;
};

module.exports = findLUSlength;
