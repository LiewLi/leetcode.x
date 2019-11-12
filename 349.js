/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = {};
  for (const n of nums1) {
    map[n] = map[n] || 1;
  }
  const ret = [];
  for (const m of nums2) {
    if (map[m]) {
      map[m]--;
      ret.push(m);
    }
  }
  return ret;
};
