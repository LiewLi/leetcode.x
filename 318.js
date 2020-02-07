/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  words.sort((a, b) => b.length - a.length);
  const _ = (w1, w2) => {
    const cnt = new Array(26).fill(0);
    for (const ch of w1) {
      const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      cnt[idx] = (cnt[idx] || 0) + 1;
    }

    for (const ch of w2) {
      const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (cnt[idx]) return true;
    }
    return false;
  };

  let maxLen = 0;
  for (let i = 0; i < words.length; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      const len = words[i].length * words[j].length;
      if (maxLen > len || _(words[i], words[j])) continue;
      maxLen = len;
    }
  }
  return maxLen;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
