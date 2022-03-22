struct Solution;

impl Solution {
    pub fn max_absolute_sum(nums: Vec<i32>) -> i32 {
        let mut partial_sum = vec![0; nums.len() + 1];
        let mut max_val = 0;
        let mut min_val = 0;
        let mut ans = 0;
        for i in 0..nums.len() {
            partial_sum[i + 1] = partial_sum[i] + nums[i];
            ans = ans
                .max((partial_sum[i + 1] - max_val).abs())
                .max((partial_sum[i + 1] - min_val).abs());
            max_val = max_val.max(partial_sum[i + 1]);
            min_val = min_val.min(partial_sum[i + 1]);
        }

        ans
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::max_absolute_sum(vec![1, -3, 2, 3, -4]), 5);
    }
}
