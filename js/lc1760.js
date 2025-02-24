/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  nums.sort((a, b) => b - a);
  let right = nums[0];
  let left = 1;
  const __check = m => {
    let cnt = maxOperations;
    for (const n of nums) {
      if (n > m) {
        const k = Math.ceil(n / m);
        cnt -= k - 1;
        if (cnt < 0) return false;
      } else break;
    }
    return true;
  };
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (__check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
module.exports = minimumSize;
