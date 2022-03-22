/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const ret = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
      const ele = queue.shift();
      ele && level.push(ele.val);
      if (ele && ele.children) {
        for (const ch of ele.children) {
          ch && queue.push(ch);
        }
      }
    }
    ret.push(level);
  }

  return ret;
};
