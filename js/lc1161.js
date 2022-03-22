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
var maxLevelSum = function(root) {
  let maxSum = 0;
  const que = [root];
  let level = 0;
  let maxLevel = 0;
  while (que.length) {
    let sum = 0;
    level++;
    const size = que.length;
    for (let i = 0; i < size; ++i) {
      const node = que.shift();
      sum += node.val;
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxLevel = level;
    }
  }

  return maxLevel;
};
