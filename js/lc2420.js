/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
  if (k <= 0) return nums;
  const decArr = Array(nums.length).fill(1);
  const incrArr = Array(nums.length).fill(1);

  let n = 1;
  decArr[0] = 1;
  for (let i = 1; i < nums.length - 1; ++i) {
    if (nums[i] <= nums[i - 1]) {
      n += 1;
      decArr[i] = n;
    } else {
      decArr[i] = 1;
      n = 1;
    }
  }

  incrArr[nums.length - 1] = 1;
  n = 1;

  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] <= nums[i + 1]) {
      n += 1;
      incrArr[i] = n;
    } else {
      incrArr[i] = 1;
      n = 1;
    }
  }

  const res = [];

  for (let i = k; i < nums.length - k; ++i) {
    if (decArr[i - 1] >= k && incrArr[i + 1] >= k) {
      res.push(i);
    }
  }

  return res;
};

module.exports = goodIndices;
