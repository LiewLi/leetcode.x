// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
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
use std::rc::Rc;
impl Solution {
    fn leaf_nodes(root: &Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        match root {
            Some(root) => {
                let mut nodes = vec![];
                let node = root.clone();
                let ref left = node.borrow().left;
                let ref right = node.borrow().right;

                nodes.extend(Self::leaf_nodes(left));

                if left.is_none() && right.is_none() {
                    nodes.push(node.borrow().val)
                }

                nodes.extend(Self::leaf_nodes(right));

                nodes
            }
            None => Vec::new(),
        }
    }

    pub fn leaf_similar(
        root1: Option<Rc<RefCell<TreeNode>>>,
        root2: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        Self::leaf_nodes(&root1) == Self::leaf_nodes(&root2)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {}
}
