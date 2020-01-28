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
var countNodes = function(root) {
  if (!root) return 0;
  let left = root;
  let right = root;
  let lh = 0;
  let rh = 0;

  while (left) {
    left = left.left;
    lh++;
  }

  while (right) {
    right = right.right;
    rh++;
  }

  if (lh === rh) return (1 << lh) - 1;
  else return 1 + countNodes(root.left) + countNodes(root.right);
};
