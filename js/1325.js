/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  let flag = false;
  const _ = (par, node) => {
    if (!node) return null;
    if (!node.left && !node.right && node.val === target) {
      flag = true;
      return null;
    }
    node.left = _(node, node.left);
    node.right = _(node, node.right);
    return node;
  };

  let r = root;
  do {
    flag = false;
    r = _(null, r);
  } while (flag && r);
  return r;
};
