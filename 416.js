/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((p, c) => p + c, 0);
  if (sum % 2 !== 0) return false;

  const s = sum / 2;

  nums.sort((a, b) => a - b);

  const cache = {};

  function util(idx, cur, sum) {
    const key = `${idx}-${cur}-${sum}`;
    if (key in cache) return cache[key];
    for (let i = idx; i < nums.length; ++i) {
      if (cur + nums[i] > sum) return (cache[key] = false);
      if (cur + nums[i] === sum) return true;
      if (util(i + 1, cur + nums[i], sum)) return true;
    }
    return (cache[key] = false);
  }

  return util(0, 0, s);
};
