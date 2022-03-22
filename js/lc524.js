/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  d.sort((a, b) => {
    if (a.length === b.length) {
      if (a == b) return 0;
      else if (a > b) return 1;
      else return -1;
    }
    return b.length - a.length;
  });
  for (const word of d) {
    let j = -1;
    let i = 0;
    for (; i < word.length; ++i) {
      while (++j < s.length) {
        if (s[j] === word[i]) break;
      }
    }
    if (j < s.length) return word;
  }

  return "";
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
