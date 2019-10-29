/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  function d(p, q) {
    return Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2);
  }
  const set = new Set([
    d(p1, p2),
    d(p1, p3),
    d(p1, p4),
    d(p2, p3),
    d(p2, p4),
    d(p3, p4)
  ]);
  return !set.has(0) && set.size == 2;
};
