struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
        let mut partial_sum = vec![0; nums.len() + 1];
        let mut ans = nums.len() + 1;
        let mut map = HashMap::new();
        for i in 0..nums.len() {
            partial_sum[i + 1] = partial_sum[i] + nums[i];
            if partial_sum[i + 1] == x {
                ans = ans.min(i + 1);
            }
            if map.get(&partial_sum[i + 1]).is_none() {
                map.insert(partial_sum[i + 1], i);
            }
        }

        for i in 0..nums.len() {
            let s = partial_sum[nums.len()] - partial_sum[i];
            if s > x {
                continue;
            } else if s == x {
                ans = ans.min(nums.len() - i);
            } else {
                if let Some(k) = map.get(&(x - s)) {
                    if *k < i {
                        ans = ans.min(nums.len() - i + *k + 1);
                    }
                }
            }
        }

        if ans == nums.len() + 1 {
            -1
        } else {
            ans as i32
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::min_operations(vec![1, 1, 4, 2, 3], 5), 2);
        assert_eq!(super::Solution::min_operations(vec![5, 2, 3, 1, 1], 5), 1);
    }
}
