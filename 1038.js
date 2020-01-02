/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0;
  function dfs(node) {
    if (!node) return;
    if (node.right) {
      dfs(node.right);
    }
    node.val += sum;
    sum += node.val;
    if (node.left) {
      dfs(node.left);
    }
  }

  dfs(root);
  return root;
};
