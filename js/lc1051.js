/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const h = [...heights];
  h.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < heights.length; ++i) {
    cnt += h[i] - heights[i] ? 1 : 0;
  }
  return cnt;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
