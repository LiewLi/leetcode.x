/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words.sort((a, b) => a.length - b.length);
  let res = 0;
  for (let i = 0; i < words.length; ++i) {
    let hasSufix = false;
    for (let j = i + 1; j < words.length; ++j) {
      if (words[j].endsWith(words[i])) {
        hasSufix = true;
        break;
      }
    }
    if (!hasSufix) {
      res += words[i].length + 1;
    }
  }
  return res;
};

module.exports = minimumLengthEncoding;
