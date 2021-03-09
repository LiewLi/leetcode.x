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
var reverseKGroup = function(head, k) {
  const reverse = h => {
    let cur = h;
    let pre = null;
    let cnt = 0;
    while (cur) {
      pre = cur;
      cur = cur.next;
      cnt++;
      if (cnt >= k) break;
    }
    if (cnt < k) {
      return [h, pre];
    }
    cur = h;
    pre = null;

    for (let i = 0; i < k && cur; ++i) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    const [p, q] = reverse(cur);
    if (h) h.next = p;
    return [pre, q];
  };
  return reverse(head)[0];
};
