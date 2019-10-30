/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) return "";
  let ret = `${t.val}`;
  if (t.left) {
    ret += `(${tree2str(t.left)})`;
  }
  if (t.right) {
    ret += (t.left ? "" : "()") + `(${tree2str(t.right)})`;
  }
  return ret;
};
