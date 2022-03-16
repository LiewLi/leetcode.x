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
use std::cell::RefCell;
use std::rc::Rc;

struct Solution;
impl Solution {
    fn dfs(
        node: &Option<Rc<RefCell<TreeNode>>>,
        parents: &mut Vec<Rc<RefCell<TreeNode>>>,
        sum: &mut i32,
    ) {
        match node {
            None => {
                return;
            }
            Some(node) => {
                if parents.len() >= 2 && parents[parents.len() - 2].borrow().val % 2 == 0 {
                    *sum += node.borrow().val;
                }
                parents.push(node.clone());
                Self::dfs(&node.borrow().left, parents, sum);
                Self::dfs(&node.borrow().right, parents, sum);
                parents.pop();
            }
        }
    }

    pub fn sum_even_grandparent(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut parents = vec![];
        let mut sum = 0;
        Self::dfs(&root, &mut parents, &mut sum);
        sum
    }
}
