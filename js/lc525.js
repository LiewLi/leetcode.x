/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const arr = nums.map(v => {
    if (v == 0) {
      return -1;
    } else {
      return v;
    }
  });

  let ans = 0;
  const map = {};
  map[0] = 0;
  const partial_sum = Array(arr.length + 1).fill(0);
  for (let i = 1; i <= arr.length; ++i) {
    partial_sum[i] = partial_sum[i - 1] + arr[i - 1];
    if (map[partial_sum[i]] !== undefined) {
      ans = Math.max(ans, i - map[partial_sum[i]]);
    } else {
      map[partial_sum[i]] = i;
    }
  }

  return ans;
};

module.exports = findMaxLength;
