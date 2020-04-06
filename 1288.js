/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  let ret = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let high = intervals[0][1];
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][1] <= high) {
      ret++;
    } else {
      high = intervals[i][1];
    }
  }

  return intervals.length - ret;
};

console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]));
