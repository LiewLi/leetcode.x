/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }
  const cntMap1 = Array(26).fill(0);
  const cntMap2 = Array(26).fill(0);
  for (let i = 0; i < word1.length; ++i) {
    cntMap1[word1.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    cntMap2[word2.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }
  for (let i = 0; i < 26; ++i) {
    if (
      (cntMap1[i] != 0 && cntMap2[i] == 0) ||
      (cntMap1[i] == 0 && cntMap2[i] != 0)
    ) {
      return false;
    }
  }
  cntMap1.sort();
  cntMap2.sort();
  return cntMap1.every((v, idx) => v == cntMap2[idx]);
};

module.exports = closeStrings;
