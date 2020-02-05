/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (!pre.length) {
    return null;
  }

  let i = 0;
  for (; i < post.length; ++i) {
    if (pre[1] === post[i]) break;
  }
  const postLeft = post.slice(0, i + 1);
  const postRight = post.slice(i + 1, -1);

  const preLeft = pre.slice(1, 1 + postLeft.length);
  const preRight = pre.slice(1 + postLeft.length);

  const node = new TreeNode(pre[0]);
  node.left = constructFromPrePost(preLeft, postLeft);
  node.right = constructFromPrePost(preRight, postRight);
  return node;
};
