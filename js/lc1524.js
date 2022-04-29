/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
  const dp0 = Array(arr.length + 1).fill(0);
  const dp1 = Array(arr.length + 1).fill(0);
  const MOD = 10 ** 9 + 7;
  let ans = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 == 0) {
      dp0[i + 1] = 1 + dp0[i];
      dp1[i + 1] = dp1[i];
    } else {
      dp0[i + 1] = dp1[i];
      dp1[i + 1] = 1 + dp0[i];
    }
    ans += dp1[i + 1];
    ans %= MOD;
  }

  return ans;
};

module.exports = numOfSubarrays;
