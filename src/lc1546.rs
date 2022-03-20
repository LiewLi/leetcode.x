struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn max_non_overlapping(nums: Vec<i32>, target: i32) -> i32 {
        let mut partial_sum = vec![0; nums.len() + 1];
        let mut ans = 0;
        let mut idx = 0;
        let mut map = HashMap::new();
        map.insert(0, 0);
        for i in 0..nums.len() {
            partial_sum[i + 1] = partial_sum[i] + nums[i];
            if let Some(v) = map.get(&(partial_sum[i + 1] - target)) {
                if *v as i32 >= idx {
                    ans += 1;
                    idx = (i + 1) as i32;
                }
            }

            map.insert(partial_sum[i + 1], i + 1);
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::max_non_overlapping(vec![-1, 3, 5, 1, 4, 2, -9], 6),
            2
        );
        assert_eq!(
            super::Solution::max_non_overlapping(vec![-2, 6, 6, 3, 5, 4, 1, 2, 8], 10),
            3
        );
        assert_eq!(
            super::Solution::max_non_overlapping(
                vec![
                    3, 0, 2, 0, 2, 3, 3, 0, 0, 2, 1, 1, 1, 0, -1, -1, 1, -1, 1, 0, 2, 0, 0, 3, 0,
                    0, 3, 1, 0, 2, 0, -1, 2, -1, 1, 1, 3, 0, 2, 3, 3, 0, 0, 2, -1, 1
                ],
                3
            ),
            12
        );
    }
}
