/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
  const arr = nums.map((a, idx) => [a, idx]).sort((a, b) => a[0] - b[0]);
  const map = {};
  let link = [arr[0]];
  link.__used = 0;
  map[arr[0][1]] = link;
  for (let i = 1; i < arr.length; ++i) {
    if (Math.abs(arr[i][0] - arr[i - 1][0]) <= limit) {
      link.push(arr[i]);
    } else {
      link = [arr[i]];
      link.__used = 0;
    }
    map[arr[i][1]] = link;
  }
  const res = new Array(nums.length);
  for (let i = 0; i < nums.length; ++i) {
    const link = map[i];
    res[i] = link[link.__used][0];
    link.__used++;
  }
  return res;
};

module.exports = lexicographicallySmallestArray;
