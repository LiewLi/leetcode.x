/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const map = {};
  for (const row of wall) {
    let s = 0;
    for (const b of row) {
      s += b;
      map[s] = (map[s] || 0) + 1;
    }
  }
  const tmp = Object.values(map).sort((a, b) => b - a);
  return tmp.length <= 1 ? wall.length : wall.length - tmp[1];
};

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
  ])
);

console.log(leastBricks([[1], [1], [1]]));
