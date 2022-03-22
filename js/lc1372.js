/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestZigZag = function(root) {
  if (!root) return 0;
  let maxLen = 0;

  const _len = (node, dir) => {
    if (!node) return 0;
    const len = _len(dir ? node.right : node.left, dir);
    maxLen = Math.max(maxLen, len);
    return Math.max(_len(dir ? node.left : node.right, 1 - dir) + 1);
  };

  const left = _len(root.left, 0);
  const right = _len(root.right, 1);
  return Math.max(left, right, maxLen);
};
