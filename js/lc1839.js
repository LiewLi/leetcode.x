/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
  let st = [];
  const K = 5;
  const vowels = { a: 0, e: 1, i: 2, o: 3, u: 4 };
  let res = 0;

  for (let i = 0; i < word.length; ++i) {
    const k = vowels[word.substring(i, i + 1)];
    if (st.length <= 0 && k == 0) {
      st.push(k);
    } else if (st[st.length - 1] == k || st[st.length - 1] + 1 == k) {
      st.push(k);
    } else {
      if (st[st.length - 1] == K - 1) {
        res = Math.max(res, st.length);
      }
      st = k == 0 ? [k] : [];
    }
  }

  if (st[st.length - 1] == K - 1) {
    res = Math.max(res, st.length);
  }

  return res;
};

module.exports = longestBeautifulSubstring;
