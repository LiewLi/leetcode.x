// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

struct Solution;

use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

impl Solution {
    pub fn find_bottom_left_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            Some(root) => {
                let mut que = VecDeque::new();
                que.push_back(root.clone());
                let mut cur = root.borrow().val;
                while !que.is_empty() {
                    let len = que.len();
                    let mut is_first = true;
                    for _ in 0..len {
                        let node = que.pop_front().unwrap();
                        let ref left = node.borrow().left;
                        let ref right = node.borrow().right;
                        for child in vec![left, right] {
                            if let Some(n) = child {
                                que.push_back(n.clone());
                                if is_first {
                                    cur = n.borrow().val;
                                    is_first = false;
                                }
                            }
                        }
                    }
                }
                cur
            }
            None => 0,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::TreeNode;
    use std::cell::RefCell;
    use std::rc::Rc;

    #[test]
    fn run() {
        let root = Rc::new(RefCell::new(TreeNode::new(2)));
        let left = Rc::new(RefCell::new(TreeNode::new(1)));
        let right = Rc::new(RefCell::new(TreeNode::new(3)));
        root.borrow_mut().left = Some(left);
        root.borrow_mut().right = Some(right);

        assert_eq!(super::Solution::find_bottom_left_value(Some(root)), 1)
    }
}
