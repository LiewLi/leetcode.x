/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let sum = 0;

  const _ = (node, val) => {
    const v = val * 2 + node.val;
    if (!node.left && !node.right) sum += v;
    if (node.left) _(node.left, v);
    if (node.right) _(node.right, v);
  };

  _(root, 0);

  return sum;
};
