/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  this.root = root;
  this.root.val = 0;
  this.set = new Set();
  const dfs = (node, par) => {
    if (!node) return;
    if (par) {
      if (par.left == node) {
        node.val = par.val * 2 + 1;
      } else {
        node.val = par.val * 2 + 2;
      }
      this.set.add(node.val);
    }
    dfs(node.left, node);
    dfs(node.right, node);
  };

  dfs(this.root, null);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
