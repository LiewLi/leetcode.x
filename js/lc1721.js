/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  k -= 1;
  let q = head;
  let len = 0;
  while (q) {
    len += 1;
    q = q.next;
  }
  q = head;
  let cnt = 0;
  let node1;
  let node2;
  while (q) {
    if (cnt == k) {
      node1 = q;
    }
    if (cnt == len - k - 1) {
      node2 = q;
    }
    cnt += 1;
    q = q.next;
  }
  const v = node1.val;
  node1.val = node2.val;
  node2.val = v;

  return head;
};

module.exports = swapNodes;
