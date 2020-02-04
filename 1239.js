/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let maxLen = 0;

  const _ = (set, idx) => {
    if (idx >= arr.length) return;
    const word = arr[idx];
    let unique = true;
    const s = new Set();
    for (const ch of word) {
      if (s.has(ch) || set.has(ch)) {
        unique = false;
        break;
      }
      s.add(ch);
    }

    _(set, idx + 1);

    if (unique) {
      maxLen = Math.max(maxLen, set.size + arr[idx].length);
      for (const ch of word) set.add(ch);
      _(set, idx + 1);
      for (const ch of word) set.delete(ch);
    }
  };
  const set = new Set();
  _(set, 0);
  return maxLen;
};

console.log(maxLength(["un", "iq", "ue"]));
