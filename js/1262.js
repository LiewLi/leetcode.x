/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  const dp = [0, -1, -1];

  const _ = (a, b, c) => {
    if (b < 0) return a;
    else return Math.max(a, b + c);
  };

  nums.forEach(n => {
    const t = dp.slice();
    for (let j = 0; j < 3; ++j) {
      dp[j] = _(t[j], t[(3 + j - (n % 3)) % 3], n);
    }
  });

  return dp[0];
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
