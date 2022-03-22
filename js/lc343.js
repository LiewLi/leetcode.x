/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = {};
  const _ = n => {
    if (n in dp) return dp[n];
    let maxN = 1;
    for (let j = 1; j < n; ++j) {
      const a = Math.max(_(j), j);
      const b = Math.max(_(n - j), n - j);
      maxN = Math.max(maxN, a * b);
    }

    return (dp[n] = maxN);
  };

  return _(n);
};

console.log(integerBreak(2));
console.log(integerBreak(10));
