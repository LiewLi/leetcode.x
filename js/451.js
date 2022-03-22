/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const cntMap = {};
  for (const ch of s) {
    cntMap[ch] = (cntMap[ch] || 0) + 1;
  }
  return s
    .split("")
    .sort((a, b) => {
      const diff = cntMap[b] - cntMap[a];
      return diff || b.charCodeAt(0) - a.charCodeAt(0);
    })
    .join("");
};

console.log(frequencySort("loveleetcode"));
