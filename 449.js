/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return "null";
  let ret = "" + root.val;
  ret += "," + serialize(root.left);
  ret += "," + serialize(root.right);
  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(",");
  function d(arr) {
    const head = arr.shift();
    if (head === "null") return null;
    const node = new TreeNode(+head);
    node.left = d(arr);
    node.right = d(arr);
    return node;
  }
  return d(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
