/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let res = 0;
  let visited = Array(26).fill(false);
  for (let i = 0; i < s.length; ++i) {
    const idx = s.charCodeAt(i) - "a".charCodeAt("0");
    if (visited[idx]) {
      res += 1;
      visited = Array(26).fill(false);
    }

    visited[idx] = true;
  }

  return res + 1;
};

module.exports = partitionString;
