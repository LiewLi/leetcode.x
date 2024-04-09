/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const nums2Map = nums2.map((a, idx) => [a, idx]);
  nums2Map.sort((p, q) => p[0] - q[0]);
  nums1.sort((a, b) => a - b);
  const res = Array(nums1.length).fill();
  let j = 0;
  const arr = [];
  for (let i = 0; i < nums2Map.length; ++i) {
    const idx = nums2Map[i][1];
    while (j < nums1.length) {
      if (nums1[j] > nums2Map[i][0]) {
        res[idx] = nums1[j];
        ++j;
        break;
      } else {
        arr.push(nums1[j]);
        ++j;
      }
    }
  }
  res.forEach((a, idx) => {
    if (a === undefined) {
      res[idx] = arr.pop();
    }
  });
  return res;
};

module.exports = advantageCount;
