/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (!root) {
    return new TreeNode(v);
  }
  if (d === 1) {
    const node = new TreeNode(v);
    node.left = root;
    return node;
  }

  let que = [root];
  let level = 0;
  while (que.length) {
    const size = que.length;
    level++;
    for (let i = 0; i < size; ++i) {
      const n = que.shift();
      const left = n && n.left;
      const right = n && n.right;
      left && que.push(left);
      right && que.push(right);
      if (level === d - 1) {
        n.left = new TreeNode(v);
        n.right = new TreeNode(v);
        n.left.left = left;
        n.right.right = right;
      }
    }

    if (level === d - 1) que = [];
  }

  return root;
};
