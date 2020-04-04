/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  if (grid.length <= 0) return null;
  const N = grid.length;
  const _ = (i, j, n) => {
    if (n <= 1) return new Node(grid[i][j], true, null, null, null, null);
    const sub = n >> 1;
    const topLeft = _(i, j, sub);
    const topRight = _(i, j + sub, sub);
    const bottomLeft = _(i + sub, j, sub);
    const bottomRight = _(i + sub, j + sub, sub);
    const nodes = [topLeft, topRight, bottomLeft, bottomRight];

    if (nodes.every(e => e.isLeaf && e.val == topLeft.val)) {
      return new Node(topLeft.val, true, null, null, null, null);
    } else {
      return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  };

  return _(0, 0, N);
};
