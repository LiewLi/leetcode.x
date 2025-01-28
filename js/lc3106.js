/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
  let res = "";
  const ach = "a".charCodeAt(0);
  const zch = "z".charCodeAt(0);
  for (let i = 0; i < s.length; ++i) {
    const ch = s.charCodeAt(i);
    if (ch == ach || k <= 0) {
      res += s[i];
      continue;
    }
    const d = Math.min(Math.abs(ch - ach), zch + 1 - ch);
    if (d <= k) {
      k -= d;
      res += "a";
    } else {
      res += String.fromCharCode(ch - k);
      k = 0;
    }
  }
  return res;
};

module.exports = getSmallestString;
