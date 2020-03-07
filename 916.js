/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  const _ = w => {
    const arr = new Array(26).fill(0);
    const each = Array.prototype.forEach.bind(w);
    each(e => {
      const idx = e.charCodeAt(0) - "a".charCodeAt(0);
      arr[idx]++;
    });
    return arr;
  };

  const $ = (a, b) => a.every((e, idx) => e >= b[idx]);

  const wordMap = new Array(26).fill(0);
  B.forEach((e, idx) => {
    _(e).forEach((c, idx) => (wordMap[idx] = Math.max(wordMap[idx], c)));
  });

  return A.filter(e => $(_(e), wordMap));
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);
