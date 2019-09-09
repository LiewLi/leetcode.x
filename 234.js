/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let n = 0
    let p = head
    while (p) {
        p = p.next
        n++
    }
    let mid = Math.floor(n / 2)
    if (mid <= 0) return true

    p = head
    let q = p.next
    let h = null
    while (mid--) {
        p.next = h
        h = p
        p = q
        q = q && q.next
    }
    let t = n & 1 ? q : p
    while (t) {
        if (t.val != h.val) return false
        t = t.next
        h = h.next 
    }
    return true
};

function ListNode(val) {
    this.val = val
    this.next = null
}

let node1 = new ListNode(1)
let node2 = new ListNode(3)
let node3 = new ListNode(2)
let node4 = new ListNode(4)
let node5 = new ListNode(3)
let node6 = new ListNode(2)
let node7 = new ListNode(1)
node1.next = node2 
node2.next = node3 
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

console.log(isPalindrome(node1))