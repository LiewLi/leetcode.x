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
var balanceBST = function(root) {
  const vals = [];
  const dfs = n => {
    if (!n) return;
    dfs(n.left);
    vals.push(n.val);
    dfs(n.right);
  };

  const build = (left, right) => {
    if (left > right) return null;
    const mid = left + Math.floor((right - left) / 2);
    const node = new TreeNode(vals[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);
    return node;
  };
  dfs(root);
  return build(0, vals.length - 1);
};
