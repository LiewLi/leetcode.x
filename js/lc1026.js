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
// var maxAncestorDiff = function(root) {
//   let ret = 0;

//   let set = new Set();

//   const dfs = (node, arr) => {
//     if (!node) {
//       return;
//     }

//     for (const n of arr) {
//       ret = Math.max(ret, Math.abs(node.val - n));
//     }

//     if (node.left && !set.has(node.left)) dfs(node.left, [...arr, node.val]);
//     if (node.right && !set.has(node.right)) dfs(node.right, [...arr, node.val]);
//   };

//   dfs(root, []);

//   return ret;
// };

var maxAncestorDiff = function(root) {
  let ret = 0;

  const dfs = (n, minV, maxV) => {
    if (!n) {
      ret = Math.max(ret, maxV - minV);
      return;
    }
    dfs(n.left, Math.min(minV, n.val), Math.max(maxV, n.val));
    dfs(n.right, Math.min(minV, n.val), Math.max(maxV, n.val));
  };

  dfs(root, root.val, root.val);

  return ret;
};
