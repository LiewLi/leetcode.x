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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const ret = [];
  const que = [root];

  const _ = (node, par) => {
    if (!node) return;
    if (to_delete.includes(node.val)) {
      que.push(node);
      if (par) {
        if (par.left == node) par.left = null;
        else if (par.right == node) par.right = null;
      }
    }
    _(node.left, node);
    _(node.right, node);
  };

  while (que.length) {
    const r = que.shift();
    if (to_delete.includes(r.val)) {
      if (r.left) que.push(r.left);
      if (r.right) que.push(r.right);
      r.left = null;
      r.right = null;
    } else {
      ret.push(r);
      _(r);
    }
  }

  _(root);

  return ret;
};
