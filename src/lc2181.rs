// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

struct Solution;

impl Solution {
    pub fn merge_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut p = &mut head.unwrap();
        let mut sum = 0;

        let mut dummy = Box::new(ListNode::new(0));
        let mut tail = &mut dummy;

        while let Some(ref mut node) = p.next {
            if node.val == 0 {
                if sum > 0 {
                    tail.next = Some(Box::new(ListNode::new(sum)));
                    if let Some(ref mut n) = tail.next {
                        tail = n;
                    }
                }
                sum = 0;
            } else {
                sum += node.val;
            }
            p = node
        }

        (*dummy).next
    }
}
