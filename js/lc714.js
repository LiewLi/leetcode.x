/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let buy = Number.MIN_SAFE_INTEGER;
  let sell = 0;
  for (let i = 0; i < prices.length; ++i) {
    sell = Math.max(sell, prices[i] - fee + buy);
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
};

module.exports = maxProfit;
