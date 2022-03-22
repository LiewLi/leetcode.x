/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let d = 0;
  for (const ch of root.children) {
    d = Math.max(maxDepth(ch), d);
  }
  return d + 1;
};
