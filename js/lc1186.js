/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  if (arr.length <= 0) return 0;
  const dp0 = new Array(arr.length).fill(0);
  const dp1 = new Array(arr.length).fill(0);
  dp0[0] = arr[0];
  let ans = arr[0];

  for (let i = 1; i < arr.length; ++i) {
    dp0[i] = arr[i] + Math.max(dp0[i - 1], 0);
    dp1[i] = arr[i] + Math.max(i >= 2 ? dp0[i - 2] : 0, dp1[i - 1]);
    ans = Math.max(ans, dp0[i], dp1[i]);
  }

  return ans;
};

module.exports = maximumSum;
