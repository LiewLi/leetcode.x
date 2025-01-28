/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
  const cnt_map_a = new Array(26).fill(0);
  const cnt_map_b = new Array(26).fill(0);
  for (let i = 0; i < a.length; ++i) {
    cnt_map_a[a.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < b.length; ++i) {
    cnt_map_b[b.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let res = a.length + b.length;
  for (let i = 0; i < 26; ++i) {
    res = Math.min(res, a.length + b.length - cnt_map_a[i] - cnt_map_b[i]);
    if (i > 0) {
      cnt_map_a[i] += cnt_map_a[i - 1];
      cnt_map_b[i] += cnt_map_b[i - 1];
    }

    if (i < 25) {
      res = Math.min(res, a.length - cnt_map_a[i] + cnt_map_b[i]);
      res = Math.min(res, b.length - cnt_map_b[i] + cnt_map_a[i]);
    }
  }
  return res;
};

module.exports = minCharacters;
