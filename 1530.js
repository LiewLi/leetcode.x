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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  const leafs = [];
  const dfs = (n, par, arr, d) => {
    if (!n) return;

    if (par) {
      arr = [...arr, par.right == n ? 1 : 0];
    }
    if (!n.left && !n.right) {
      leafs.push([arr, d]);
    }
    dfs(n.left, n, arr, d + 1);
    dfs(n.right, n, arr, d + 1);
  };

  dfs(root, null, [0], 0);

  let ret = 0;
  for (let i = 0; i < leafs.length; ++i) {
    for (let j = i + 1; j < leafs.length; ++j) {
      const d1 = leafs[i][1];
      const d2 = leafs[j][1];
      let k = 0;
      while (d1 >= k && d2 >= k) {
        const p1 = leafs[i][0][k];
        const p2 = leafs[j][0][k];
        if (p1 != p2) {
          ret += d1 - k + d2 - k + 2 <= distance ? 1 : 0;
          break;
        }
        k++;
      }
      if (d1 < k || d2 < k) ret += Math.abs(d1 - d2) <= distance ? 1 : 0;
    }
  }

  return ret;
};
