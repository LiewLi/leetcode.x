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
var longestUnivaluePath = function(root) {
  const map = new Map();
  const _ = (node, val) => {
    if (!node) return 0;
    if (node.val !== val) return 0;
    if (map.has(node)) return map.get(node);
    const v = 1 + Math.max(_(node.left, val), _(node.right, val));
    map.set(node, v);
    return v;
  };

  let maxLen = 0;

  const $ = node => {
    if (!node) return 0;
    const left = _(node.left, node.val);
    const right = _(node.right, node.val);
    maxLen = Math.max(maxLen, left + right);
    $(node.left);
    $(node.right);
  };

  $(root);

  return maxLen;
};
