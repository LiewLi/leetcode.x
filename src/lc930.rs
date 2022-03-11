struct Solution;

impl Solution {
    pub fn num_subarrays_with_sum(nums: Vec<i32>, goal: i32) -> i32 {
        0
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::num_subarrays_with_sum(vec![1, 0, 1, 0, 1], 2),
            4
        );
    }
}
