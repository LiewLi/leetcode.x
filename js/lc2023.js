/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
// var numOfPairs = function(nums, target) {
//     let res = 0;
//     for (let i = 0; i < nums.length; ++i) {
//         for (let j = 0; j < nums.length; ++j) {
//             if (i == j  || nums[i].length + nums[j].length != target.length) continue;
//             res += (nums[i] + nums[j] == target) ? 1 : 0;
//         }
//     }
//     return res;
// };

var numOfPairs = function(nums, target) {
  let res = 0;
  const cntMap = {};
  for (const n of nums) {
    cntMap[n] = cntMap[n] || 0;
    cntMap[n] += 1;
  }

  for (const [prefix, cnt] of Object.entries(cntMap)) {
    if (target.startsWith(prefix)) {
      const suffix = target.substring(prefix.length);
      res += cnt * (cntMap[suffix] || 0);
      if (prefix == suffix) {
        res -= cnt;
      }
    }
  }

  return res;
};

module.exports = numOfPairs;
