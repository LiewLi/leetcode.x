/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    const set = new Set(G)
    let p = head
    let cnt = 0
    while (p) {
        let q = p
        while (q && set.has(q.val)) {
            q = q.next
        }
        if (q != p) {
            cnt++
            p = q
        }
        p = p && p.next
    }

    return cnt
};