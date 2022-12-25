/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  nums.sort((a, b) => {
    if (a.length != b.length) {
      return a.length - b.length;
    } else {
      for (let i = 0; i < a.length; ++i) {
        if (a.charCodeAt(i) == b.charCodeAt(i)) {
          continue;
        } else {
          return a.charCodeAt(i) - b.charCodeAt(i);
        }
      }
      return 0;
    }
  });

  return nums[nums.length - k];
};

module.exports = kthLargestNumber;
