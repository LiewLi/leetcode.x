/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  function* traversal(node) {
    const stack = [];
    while (node || stack.length) {
      if (node != null) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        yield node.val;
        node = node.right;
      }
    }
  }

  const tree1 = traversal(root1);
  const tree2 = traversal(root2);
  let node1 = null;
  let node2 = null;
  const ret = [];
  while (true) {
    if (!node1) node1 = tree1.next();
    if (!node2) node2 = tree2.next();
    if (node2.done && node1.done) return ret;
    if (node1.done || node2.value <= node1.value) {
      ret.push(node2.value);
      node2 = null;
    } else {
      ret.push(node1.value);
      node1 = null;
    }
  }
};
