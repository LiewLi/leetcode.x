/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  if (nums.length <= 1) return 0;
  const cnt_map0 = {};
  const cnt_map1 = {};
  const cnt0 = nums.length >> 1;
  const cnt1 = nums.length - cnt0;
  nums.forEach((n, idx) => {
    if (idx % 2 == 0) {
      cnt_map0[n] || (cnt_map0[n] = 0);
      cnt_map0[n]++;
    } else {
      cnt_map1[n] || (cnt_map1[n] = 0);
      cnt_map1[n]++;
    }
  });
  const map = Object.entries(cnt_map1).sort((a, b) => b[1] - a[1]);
  let res = nums.length;
  for (let k = 0; k < nums.length; k += 2) {
    const n = nums[k];
    let i = 0;
    while (i < map.length && map[i][0] == n) ++i;
    res = Math.min(
      res,
      cnt0 - (cnt_map0[n] || 0) + (i < map.length ? cnt1 - map[i][1] : cnt1)
    );
  }
  return res;
};

module.exports = minimumOperations;
