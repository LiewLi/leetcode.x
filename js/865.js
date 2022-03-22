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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  if (!root) return root;
  const dMap = {};
  const childMap = {};
  const depth = {};
  const valToNode = {};

  let maxDepth = 0;
  const dfs = (node, level = 0) => {
    if (!node) return [];
    dMap[level] = dMap[level] || [];
    dMap[level].push(node.val);
    depth[node.val] = level;
    valToNode[node.val] = node;
    maxDepth = Math.max(maxDepth, level);
    const left = dfs(node.left, level + 1);
    const right = dfs(node.right, level + 1);
    return (childMap[node.val] = [node.val].concat(left).concat(right));
  };

  dfs(root);

  const maxDepthNodes = dMap[maxDepth];
  const nodes = Object.keys(childMap).sort((a, b) => depth[b] - depth[a]);
  for (const node of nodes) {
    if (childMap[node].length < maxDepthNodes.length) continue;
    if (maxDepthNodes.every(v => childMap[node].includes(v)))
      return valToNode[node];
  }
};
