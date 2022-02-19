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
      right: None
    }
  }
}
struct Solution;

use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn is_unival_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match root {
          Some(root) => {
              let node = root.borrow();
              if let Some(ref left) = node.left {
                if node.val != left.borrow().val || !Self::is_unival_tree(node.left.clone()) {
                  return false;
                }
              }

              if let Some(ref right) = node.right {
                if node.val != right.borrow().val || !Self::is_unival_tree(node.right.clone()) {
                  return false;
                }
              }

              true
          },
          None => true,
      }
    }
}


#[cfg(test)]
mod tests {
    use super::{TreeNode, Solution};
    use std::rc::Rc;
    use std::cell::RefCell;

    #[test]
    fn run() {
      let node1 = Rc::new(RefCell::new(TreeNode::new(1)));

      let node2 = Rc::new(RefCell::new(TreeNode::new(2)));

      let root: Rc<RefCell<TreeNode>> = Rc::new(RefCell::new(TreeNode {
        val: 1,
        left: Some(node1),
        right: Some(node2),
      }));

      assert!(!Solution::is_unival_tree(Some(root)))
    }
}