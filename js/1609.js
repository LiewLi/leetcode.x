/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  if (!root) {
    return true;
  }
  if (root.val % 2 == 0) {
    return false;
  }
  let que = [root];
  let level = 0;

  while (que.length) {
    level += 1;
    const len = que.length;
    const nodes = [];

    const addIfValid = (node, level) => {
      const sign = level % 2 == 0 ? 1 : -1;
      if (!node) return true;
      if (node.val % 2 == level % 2) return false;
      if (
        nodes.length > 0 &&
        sign * (node.val - nodes[nodes.length - 1].val) <= 0
      ) {
        return false;
      }
      nodes.push(node);
      return true;
    };

    for (let i = 0; i < len; ++i) {
      const v = que.shift();
      if (!addIfValid(v.left, level) || !addIfValid(v.right, level)) {
        return false;
      }
    }
    que = nodes;
  }

  return true;
};

const node0 = new TreeNode(5);
const node1 = new TreeNode(9);
const node2 = new TreeNode(1);
const node3 = new TreeNode(3);
const node4 = new TreeNode(5);
const node5 = new TreeNode(7);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;

console.log(isEvenOddTree(node0));
