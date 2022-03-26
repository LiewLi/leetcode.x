/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
  const map = {};
  const MOD = 10 ** 9 + 7;
  let ans = 0;
  for (const d of deliciousness) {
    map[d] = (map[d] || 0) + 1;
  }
  for (let i = 0; i < 32; ++i) {
    for (const k of Object.keys(map)) {
      const d = +k;
      const c = (1 << i) - d;
      const cnt0 = map[d] || 0;
      const cnt1 = map[c] || 0;
      if (d <= c) {
        if (d == c) {
          ans += ((cnt0 * (cnt0 - 1)) / 2) % MOD;
        } else {
          ans += (cnt0 * cnt1) % MOD;
        }
      }
    }
  }

  return ans;
};

module.exports = countPairs;
