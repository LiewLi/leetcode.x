/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  const node = new TreeNode(val);

  if (root.val < val) {
    node.left = root;
    return node;
  }

  let par = null;
  let cur = root;
  while (cur && cur.val > val) {
    par = cur;
    cur = cur.right;
  }

  if (cur) {
    par.right = node;
    node.left = cur;
  } else {
    par.right = node;
  }

  return root;
};
