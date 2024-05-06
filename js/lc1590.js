/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  if (nums.length <= 0) {
    return 0;
  }
  const map = {};
  let sumSoFar = 0;
  map[0] = [nums.length];
  for (let i = nums.length - 1; i >= 0; --i) {
    sumSoFar += nums[i];
    const m = sumSoFar % p;
    map[m] = map[m] || [];
    map[m].unshift(i);
  }
  if (sumSoFar % p == 0) {
    return 0;
  }
  let res = nums.length;
  sumSoFar = 0;
  for (let i = 0; i < nums.length; ++i) {
    const n = sumSoFar % p;
    const m = (p - n) % p;
    const arr = map[m] || [];
    sumSoFar += nums[i];
    if (arr.length <= 0) continue;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < i) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (arr[left] > i) {
      res = Math.min(res, arr[left] - i);
    }
  }

  return res >= nums.length ? -1 : res;
};

module.exports = minSubarray;
