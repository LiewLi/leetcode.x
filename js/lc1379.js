/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  const _ = (node1, node2) => {
    if (!node1) return;
    if (node1 === target) {
      return node2;
    }
    return _(node1.left, node2.left) || _(node1.right, node2.right);
  };

  return _(original, cloned);
};
