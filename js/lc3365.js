/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function(s, t, k) {
  if (s.length % k != 0) return false;
  const str_map = {};
  const N = s.length / k;
  for (let i = 0; i < k; ++i) {
    const str = s.substring(i * N, i * N + N);
    str_map[str] ||= 0;
    str_map[str]++;
  }
  for (let i = 0; i < k; ++i) {
    const str = t.substring(i * N, i * N + N);
    if (str in str_map && str_map[str] > 0) str_map[str]--;
    else return false;
  }
  return true;
};

module.exports = isPossibleToRearrange;
