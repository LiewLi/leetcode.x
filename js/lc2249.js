/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  const _inside_circle = (circle, p) => {
    const rx = Math.abs(p[0] - circle[0]);
    const ry = Math.abs(p[1] - circle[1]);
    return rx * rx + ry * ry <= circle[2] * circle[2];
  };
  const set = new Set();
  for (const circle of circles) {
    const bottomLeft = [circle[0] - circle[2], circle[1] - circle[2]];
    const topRight = [circle[0] + circle[2], circle[1] + circle[2]];
    for (let x = bottomLeft[0]; x <= topRight[0]; ++x) {
      for (let y = bottomLeft[1]; y <= topRight[1]; ++y) {
        const p = [x, y];
        if (_inside_circle(circle, p)) {
          set.add(`${x},${y}`);
        }
      }
    }
  }
  return set.size;
};

module.exports = countLatticePoints;
