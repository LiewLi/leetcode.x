/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const map = {};
  for (const p of points) {
    map[p[0]] = map[p[0]] || new Set();
    map[p[0]].add(p[1]);
  }

  let ret = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < points.length; ++i) {
    for (let j = 0; j < i; ++j) {
      const p = points[i];
      const q = points[j];
      const p1 = [p[0], q[1]];
      const p2 = [q[0], p[1]];
      if (
        !!map[p1[0]] &&
        map[p1[0]].has(p1[1]) &&
        !!map[p2[0]] &&
        map[p2[0]].has(p2[1])
      ) {
        const area = Math.abs(p[0] - q[0]) * Math.abs(q[1] - p[1]);
        if (area > 0) {
          ret = Math.min(ret, area);
        }
      }
    }
  }
  return ret == Number.MAX_SAFE_INTEGER ? 0 : ret;
};
module.exports = minAreaRect;
