/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function(nums, target) {
  let sum = 0;
  for (const n of nums) sum += n;
  const remain = target % sum;
  const m = Math.floor(target / sum);
  const arr = [...nums, ...nums];
  const prefix_sum = new Array(arr.length + 1).fill(0);
  const map = {};
  map[0] = 0;
  const _min = (a, b) => (a < 0 ? b : Math.min(a, b));
  let res = -1;
  for (let i = 1; i <= arr.length; ++i) {
    prefix_sum[i] = arr[i - 1] + prefix_sum[i - 1];
    map[prefix_sum[i]] = i;
    const r = prefix_sum[i] - remain;
    if (r in map) {
      res = _min(res, i - map[r]);
    }
  }
  if (res >= 0) res += m * nums.length;
  return res;
};

module.exports = minSizeSubarray;
