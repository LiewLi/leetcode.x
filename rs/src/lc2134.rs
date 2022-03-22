struct Solution;

impl Solution {
    pub fn min_swaps(nums: Vec<i32>) -> i32 {
        let cnt = nums.iter().filter(|a| **a == 1).count();
        let mut zero_cnt = nums.iter().take(cnt).filter(|a| **a == 0).count();
        let mut ans = zero_cnt;
        for s in 1..nums.len() {
            zero_cnt -= if nums[s - 1] == 0 { 1 } else { 0 };
            zero_cnt += if nums[(s + cnt - 1) % nums.len()] == 0 {
                1
            } else {
                0
            };
            ans = ans.min(zero_cnt);
        }
        ans as i32
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::min_swaps(vec![0, 1, 0, 1, 1, 0, 0]), 1);
        assert_eq!(
            super::Solution::min_swaps(vec![0, 1, 0, 0, 1, 0, 0, 0, 1]),
            1
        );
    }
}
