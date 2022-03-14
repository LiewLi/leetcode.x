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
    pub fn pair_sum(head: Option<Box<ListNode>>) -> i32 {
        let mut arr = vec![];
        let mut head = head;
        while let Some(h) = head {
            arr.push(h.val);
            head = h.next;
        }
        arr.iter()
            .enumerate()
            .map(|(idx, a)| *a + arr[arr.len() - 1 - idx])
            .max()
            .unwrap()
    }
}
