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
var distributeCoins = function(root) {
  let cnt = 0;
  function dfs(node, par) {
    if (!node) return;
    dfs(node.left, node);
    dfs(node.right, node);
    if (par) par.val += node.val - 1;
    cnt += Math.abs(node.val - 1);
    node.val = 1;
  }

  dfs(root, null);
  return cnt;
};
