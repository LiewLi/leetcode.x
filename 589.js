/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const ret = [];
  function dfs(node) {
    if (!node) return;
    ret.push(node.val);
    if (node.children) {
      for (const ch of node.children) dfs(ch);
    }
  }
  dfs(root);
  return ret;
};
