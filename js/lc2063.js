/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
  let res = 0;

  const isVowel = a => {
    return (
      a == "a".charCodeAt(0) ||
      a == "e".charCodeAt(0) ||
      a == "i".charCodeAt(0) ||
      a == "o".charCodeAt(0) ||
      a == "u".charCodeAt(0)
    );
  };

  for (let i = 0; i < word.length; ++i) {
    if (isVowel(word.charCodeAt(i))) {
      res += (i + 1) * (word.length - i);
    }
  }

  return res;
};

module.exports = countVowels;
