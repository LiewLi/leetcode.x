/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const arr = new Array(nums.length).fill(0);
  let maxLen = 0;
  for (const n of nums) {
    if (arr[n]) continue;
    const s = new Set();
    let next = n;
    while (!s.has(next)) {
      s.add(next);
      arr[next] = 1;
      next = nums[next];
    }

    maxLen = Math.max(maxLen, s.size);
  }
  return maxLen;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
