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
var deepestLeavesSum = function(root) {
  let maxLevel = 0;
  const map = [];
  const dfs = (node, level) => {
    if (!node) return;
    maxLevel = Math.max(maxLevel, level);
    map[level] = (map[level] || 0) + node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return map[maxLevel] || 0;
};
