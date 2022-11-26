/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
  const arr = [];
  let res = 0;

  for (const interval of intervals) {
    arr.push([interval[0], 1]);
    arr.push([interval[1] + 1, -1]);
  }

  arr.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let v = 0;
  for (const a of arr) {
    v += a[1];
    res = Math.max(res, v);
  }

  return res;
};

module.exports = minGroups;
