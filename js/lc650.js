/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  const memo = {};
  const _steps = n => {
    if (n <= 1) {
      return 0;
    }
    if (n in memo) {
      return memo[n];
    }
    let res = n;
    for (let i = n - 1; i >= 1; --i) {
      if (n % i == 0) {
        res = Math.min(res, n / i + _steps(i));
      }
    }
    return (memo[n] = res);
  };

  return _steps(n);
};

module.exports = minSteps;
