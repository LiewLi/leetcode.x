/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const N = pattern.length;

  const _ = word => {
    const map = {};
    for (let i = 0; i < N; ++i) {
      if (pattern[i] in map) {
        if (map[pattern[i]] !== word[i]) return false;
      } else {
        if (Object.values(map).includes(word[i])) return false;
        map[pattern[i]] = word[i];
      }
    }
    return true;
  };

  const ret = [];

  for (const word of words) {
    _(word) && ret.push(word);
  }
  return ret;
};

console.log(findAndReplacePattern(["ef", "fq", "ao", "at", "lx"], "ya"));
