/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const area1 = Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2);
  const area2 = Math.abs(bx1 - bx2) * Math.abs(by1 - by2);
  const crossX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const crossY = Math.min(ay2, by2) - Math.max(ay1, by1);
  if (crossX > 0 && crossY > 0) {
    return area1 + area2 - crossX * crossY;
  } else {
    return area1 + area2;
  }
};

module.exports = computeArea;
