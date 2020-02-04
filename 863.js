/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  let parents = [];
  const _ = (node, pars) => {
    if (!node) return;
    if (node === target) {
      parents = [node, ...pars];
    }
    pars.unshift(node);
    _(node.left, pars);
    _(node.right, pars);
    pars.shift();
  };

  _(root, parents);

  const ret = [];
  const set = new Set();

  const $ = (node, K) => {
    let level = 0;
    const que = [node];
    while (que.length) {
      const size = que.length;
      for (let i = 0; i < size; ++i) {
        const n = que.shift();
        set.add(n);
        if (n.left && !set.has(n.left)) que.push(n.left);
        if (n.right && !set.has(n.right)) que.push(n.right);
        if (level === K) ret.push(n.val);
      }
      level++;
    }
  };
  for (let i = 0; i < parents.length; ++i) {
    K - i >= 0 && $(parents[i], K - i);
  }

  return ret;
};
