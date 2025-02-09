/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  const map = {};
  for (let i = 0; i < word.length; ++i) {
    const ch = word[i];
    if (ch >= "a" && ch <= "z") {
      map[ch] = i;
    } else {
      if (!(ch in map)) map[ch] = i;
    }
  }
  let res = 0;
  for (let i = 0; i < 26; ++i) {
    const ch = String.fromCharCode(i + "a".charCodeAt(0));
    const ch_upper = String.fromCharCode(i + "A".charCodeAt(0));
    if (ch in map && ch_upper in map && map[ch] <= map[ch_upper]) {
      ++res;
    }
  }
  return res;
};

module.exports = numberOfSpecialChars;
