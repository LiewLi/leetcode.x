/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const count = {};
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  let using = 0;
  let avoid = 0;
  let prev = -1;
  for (let k = 1; k <= 10000; ++k) {
    if (!count[k]) continue;
    const m = Math.max(using, avoid);
    if (prev !== k - 1) {
      using = k * count[k] + m;
      avoid = m;
    } else {
      using = k * count[k] + avoid;
      avoid = m;
    }
    prev = k;
  }

  return Math.max(using, avoid);
};
