/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const n = [];
  const m = [];
  while (l1) {
    n.unshift(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    m.unshift(l2.val);
    l2 = l2.next;
  }

  let c = 0;
  let root = null;

  const _ = val => {
    const node = new ListNode(val);
    node.next = root;
    root = node;
  };

  for (let i = 0; i < Math.max(m.length, n.length); ++i) {
    let s = c + (m[i] || 0) + (n[i] || 0);
    if (s >= 10) {
      c = 1;
      s -= 10;
    } else c = 0;

    _(s);
  }
  if (c) _(c);

  return root;
};
