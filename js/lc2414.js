/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let res = 1;
  let i = 0;
  let j = i + 1;
  for (; j < s.length; ++j) {
    if (s.charCodeAt(j) == s.charCodeAt(j - 1) + 1) {
      continue;
    } else {
      res = Math.max(res, j - i);
      i = j;
    }
  }
  res = Math.max(res, j - i);

  return res;
};

module.exports = longestContinuousSubstring;
