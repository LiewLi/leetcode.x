/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
  if (changed.length % 2 != 0) {
    return [];
  }
  changed.sort((a, b) => a - b);
  const res = [];
  const visited = Array(changed.length).fill(false);
  const map = {};
  for (let i = changed.length - 1; i >= 0; --i) {
    (map[changed[i]] = map[changed[i]] || []).push(i);
  }
  for (let i = changed.length - 1; i >= 0; --i) {
    if (visited[i]) continue;
    if (changed[i] % 2 != 0) return [];
    visited[i] = true;
    const origin = changed[i] >> 1;
    if (!map[origin] || map[origin].length <= 0) return [];
    visited[map[origin].pop()] = true;
    res.push(origin);
  }
  return res;
};

module.exports = findOriginalArray;
