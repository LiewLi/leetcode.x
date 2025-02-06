/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
  let p_cnt = 0;
  let n_cnt = 0;
  const N = nums1.length;
  for (let i = 0; i < N; ++i) {
    const d = nums1[i] - nums2[i];
    if (k == 0) {
      if (d != 0) return -1;
    } else {
      if (d % k != 0) return -1;
      if (d > 0) p_cnt += d / k;
      else n_cnt -= d / k;
    }
  }
  return p_cnt == n_cnt ? p_cnt : -1;
};

module.exports = minOperations;
