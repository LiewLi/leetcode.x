/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//   const ret = [];
//   function dfs(node) {
//     if (!node) return;
//     ret.push(node.val);
//     if (node.children) {
//       for (const ch of node.children) dfs(ch);
//     }
//   }
//   dfs(root);
//   return ret;
// };

var preorder = function(root) {
  const ret = [];
  if (!root) return [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    ret.push(node.val);
    for (let i = node.children.length - 1; i >= 0; --i) {
      stack.push(node.children[i]);
    }
  }
  return ret;
};
