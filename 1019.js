/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const ret = [];
  for (let i = 0; i < arr.length; ++i) {
    let j = i + 1;
    for (; j < arr.length; ++j) {
      if (arr[j] > arr[i]) break;
    }
    ret.push(j < arr.length ? arr[j] : 0);
  }
  return ret;
};
