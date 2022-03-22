/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  const map = {};

  function util(N) {
    if (!N) return [null];
    if ((N - 1) % 2 !== 0) return [];
    if (map[N]) return map[N];
    const ret = [];
    for (let i = 0; i <= N - 1; ++i) {
      const left = util(i);
      const right = util(N - 1 - i);
      for (const l of left) {
        for (const r of right) {
          const node = new TreeNode(0);
          node.left = l;
          node.right = r;
          ret.push(node);
        }
      }
    }
    return (map[N] = ret);
  }

  return util(N);
};

console.log(allPossibleFBT(7));
