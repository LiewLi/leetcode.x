/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  let sum = 0;
  for (const n of nums) sum += n;
  const target = Math.abs(goal - sum);
  let res = 0;
  res += Math.floor(target / limit);
  const remain = target % limit;
  return remain > 0 ? res + 1 : res;
};
module.exports = minElements;
