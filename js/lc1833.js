/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let ans = 0;
  for (const c of costs) {
    if (coins >= c) {
      coins -= c;
      ans += 1;
    } else {
      break;
    }
  }
  return ans;
};

module.exports = maxIceCream;
