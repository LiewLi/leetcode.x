/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
  let res = 0;
  for (let i = 0; i < nums1.length; ++i) {
    let s = i;
    let e = nums2.length - 1;
    if (nums1[i] > nums2[s]) continue;
    while (s < e) {
      let mid = s + ((e - s) >> 1);
      if (s + 1 == e) {
        mid = e;
      }
      if (nums1[i] > nums2[mid]) {
        e = mid - 1;
      } else {
        s = mid;
      }
    }

    if (nums1[i] <= nums2[s]) {
      res = Math.max(res, s - i);
    }
  }

  return res;
};

module.exports = maxDistance;
