struct Solution;

use std::mem::swap;

impl Solution {
    pub fn dominant_index(nums: Vec<i32>) -> i32 {
        if nums.len() < 2 {
            return 0;
        }
        let mut pair = if nums[0] >= nums[1] { (0, 1) } else { (1, 0) };
        for idx in 2..nums.len() {
            if nums[pair.1] < nums[idx] {
                pair.1 = idx;
            }
            if nums[pair.1] > nums[pair.0] {
                swap(&mut pair.0, &mut pair.1);
            }
        }

        if nums[pair.0] >= nums[pair.1] << 1 {
            pair.0 as i32
        } else {
            -1
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn run() {
        assert_eq!(Solution::dominant_index(vec![3, 6, 1, 0]), 1);
        assert_eq!(Solution::dominant_index(vec![1, 2, 3, 4]), -1);
    }
}
