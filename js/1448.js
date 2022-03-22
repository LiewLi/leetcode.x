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
var goodNodes = function(root) {
  let ret = 0;
  const _max = arr => arr.reduce((a, b) => Math.max(a, b));
  const _ = (node, arr) => {
    if (!node) return;
    if (!arr.length || node.val >= _max(arr)) ret++;
    arr.push(node.val);
    _(node.left, arr);
    _(node.right, arr);
    arr.pop();
  };

  _(root, []);

  return ret;
};
