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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  const que = [root];
  const ans = [];
  while (que.length > 0) {
    const size = que.length;
    let max_v = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < size; ++i) {
      const node = que.shift();
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
      max_v = Math.max(max_v, node.val);
    }
    ans.push(max_v);
  }
  return ans;
};

module.exports = largestValues;
