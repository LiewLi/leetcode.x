/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function(s) {
  if (s.length <= 2) return s.length;
  let i = 0;
  let j = 1;
  let res = 0;
  let last = -1;
  while (j < s.length) {
    if (s[j] == s[j - 1]) {
      if (last < 0) last = j;
      else {
        res = Math.max(res, j - last + 1, j - i);
        i = last;
        last = j;
      }
    }
    ++j;
  }
  res = Math.max(res, j - i);
  return res;
};

module.exports = longestSemiRepetitiveSubstring;
