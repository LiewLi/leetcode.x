/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let p = node;
  let q = node.next;
  while (q) {
    if (!q.next) {
      p.next = null;
    }
    p.val = q.val;
    p = q;
    q = q.next;
  }
};
