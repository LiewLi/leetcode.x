/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  const set = new Set();
  let ret = "";
  const dfs = (n, arr) => {
    if (!n) return;
    arr.push(String.fromCharCode("a".charCodeAt(0) + n.val));
    set.add(n);
    if (n.left && !set.has(n.left)) dfs(n.left, [...arr]);
    if (n.right && !set.has(n.right)) dfs(n.right, [...arr]);
    if (!n.right && !n.left) {
      const str = arr.reverse().join("");
      if (!ret.length || str < ret) {
        ret = str;
      }
    }
  };

  dfs(root, []);
  return ret;
};
