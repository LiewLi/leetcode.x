/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  const pre_b_cnt = new Array(s.length).fill(0);
  const suf_a_cnt = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; ++i) {
    pre_b_cnt[i] = (s[i] == "b" ? 1 : 0) + (i > 0 ? pre_b_cnt[i - 1] : 0);
  }
  for (let j = s.length - 1; j >= 0; --j) {
    suf_a_cnt[j] =
      (s[j] == "a" ? 1 : 0) + (j < s.length - 1 ? suf_a_cnt[j + 1] : 0);
  }

  let res = suf_a_cnt[0];
  for (let i = 0; i < s.length; ++i) {
    res = Math.min(
      res,
      pre_b_cnt[i] + (i + 1 < s.length ? suf_a_cnt[i + 1] : 0)
    );
  }
  return res;
};

module.exports = minimumDeletions;
