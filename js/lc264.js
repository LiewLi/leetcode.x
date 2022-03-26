/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const ans = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  for (let i = 1; i < n; ++i) {
    const val = Math.min(ans[i2] * 2, ans[i3] * 3, ans[i5] * 5);
    if (val == ans[i2] * 2) {
      i2 += 1;
    }
    if (val == ans[i3] * 3) {
      i3 += 1;
    }

    if (val == ans[i5] * 5) {
      i5 += 1;
    }
    ans.push(val);
  }
  return ans[n - 1];
};

module.exports = nthUglyNumber;
