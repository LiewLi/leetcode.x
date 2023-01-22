/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  const MOD = 10 ** 9 + 7;

  const revNums = nums.map(a => {
    let n = 0;
    while (a) {
      const m = a % 10;
      n = 10 * n + m;
      a = Math.floor(a / 10);
    }
    return n;
  });

  let res = 0;

  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    const diff = nums[i] - revNums[i];
    map[diff] = map[diff] || 0;
    map[diff] += 1;
  }

  for (const v of Object.values(map)) {
    const cnt = Math.floor(((v % MOD) * ((v - 1) % MOD)) / 2);
    res += cnt % MOD;
    res %= MOD;
  }

  return res;
};

module.exports = countNicePairs;
