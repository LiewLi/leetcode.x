/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const alphabetMap = Array(26).fill(0);
  for (const word of words) {
    for (let i = 0; i < word.length; ++i) {
      const idx = word.charCodeAt(i) - "a".charCodeAt(0);
      alphabetMap[idx] = alphabetMap[idx] || 0;
      alphabetMap[idx] += 1;
    }
  }

  return alphabetMap.every(v => v % words.length == 0);
};

module.exports = makeEqual;
