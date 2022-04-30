/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  if (nums1.length > nums2.length * 6 || nums1.length * 6 < nums2.length) {
    return -1;
  }
  let sum1 = nums1.reduce((p, v) => p + v);
  let sum2 = nums2.reduce((p, v) => p + v);
  if (sum1 < sum2) {
    [nums1, nums2] = [nums2, nums1];
    [sum1, sum2] = [sum2, sum1];
  }

  nums1.sort((a, b) => b - a);
  nums2.sort((a, b) => a - b);
  let k1 = 0;
  let k2 = 0;
  let ans = 0;

  while (sum1 > sum2) {
    const d1 = k1 < nums1.length ? nums1[k1] - 1 : 0;
    const d2 = k2 < nums2.length ? 6 - nums2[k2] : 0;
    if (d1 >= d2) {
      sum1 -= nums1[k1++] - 1;
    } else {
      sum2 += 6 - nums2[k2++];
    }
    ans += 1;
  }

  return ans;
};

module.exports = minOperations;
