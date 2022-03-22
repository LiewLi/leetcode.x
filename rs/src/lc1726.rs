struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn tuple_same_product(nums: Vec<i32>) -> i32 {
        if nums.len() < 4 {
            return 0;
        }
        let mut cnt = 0;
        let mut map = HashMap::new();
        for i in 0..nums.len() {
            for j in i + 1..nums.len() {
                let product = nums[i] * nums[j];
                let entry = map.entry(product).or_insert(0);
                *entry += 1;
            }
        }
        for key in map.keys() {
            let c = map.get(key).unwrap_or(&0);
            if *c >= 2 {
                cnt += *c * (*c - 1) * 4;
            }
        }
        cnt
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn lc1726_test() {
        assert_eq!(Solution::tuple_same_product(vec![2, 3, 4, 6]), 8);
    }
}
