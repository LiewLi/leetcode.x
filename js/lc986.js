/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const ret = [];
  for (const a of A) {
    for (const b of B) {
      if (b[0] > a[1]) break;
      if (b[1] < a[0]) continue;
      ret.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
    }
  }

  return ret;
};
