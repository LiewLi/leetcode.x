/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
  if (prices.length <= 0) return 0;
  const dp0 = new Array(prices.length).fill(-1);
  const dp1 = new Array(prices.length).fill(-1);
  dp1[0] = prices[0];
  for (let i = 1; i < prices.length; ++i) {
    for (let k = i - 1; k >= 0 && k + k + 1 >= i; --k) {
      if (dp0[i] == -1) {
        dp0[i] = dp1[k];
      } else {
        dp0[i] = Math.min(dp0[i], dp1[k]);
      }
    }
    for (let k = i - 1; k >= 0 && k + k + 1 + 1 >= i; --k) {
      if (dp1[i] == -1) {
        dp1[i] = dp1[k] + prices[i];
      } else {
        dp1[i] = Math.min(dp1[i], dp1[k] + prices[i]);
      }
    }
  }
  let res = dp1[prices.length - 1];
  if (dp0[prices.length - 1] >= 0) {
    res = Math.min(res, dp0[prices.length - 1]);
  }
  return res;
};

module.exports = minimumCoins;
