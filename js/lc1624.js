/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let ans = -1;
  const map = {};
  for (let i = 0; i < s.length; ++i) {
    if (map[s.charAt(i)] === undefined) {
      map[s.charAt(i)] = i;
    } else {
      ans = Math.max(ans, i - map[s.charAt(i)] - 1);
    }
  }
  return ans;
};
module.exports = maxLengthBetweenEqualCharacters;
