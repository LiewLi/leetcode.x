/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  const partial_sum = Array(arr.length + 1).fill(0);
  arr.forEach((a, idx) => {
    partial_sum[idx + 1] = partial_sum[idx] + a;
  });
  let ans = 0;
  for (let i = k; i <= arr.length; ++i) {
    const sum = partial_sum[i] - partial_sum[i - k];
    if (sum >= threshold * k) {
      ans += 1;
    }
  }
  return ans;
};

module.exports = numOfSubarrays;
