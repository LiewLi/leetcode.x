/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  if (!nums.length) return 0;
  let low = 1;
  let high = 1;

  for (const n of nums) {
    high = Math.max(high, n);
  }

  const _ = n => nums.reduce((p, c) => p + Math.ceil(c / n), 0);
  const $ = (low, high) => low + Math.floor((high - low) / 2);

  while (low < high) {
    const mid = $(low, high);
    const val = _(mid);
    if (val <= threshold) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
