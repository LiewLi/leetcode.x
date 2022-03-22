use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn check_subarray_sum(nums: Vec<i32>, k: i32) -> bool {
        if nums.len() < 2 {
            return false;
        }
        let mut partial_sum = vec![0; nums.len()];
        let mut sum = 0;
        let mut map: HashMap<i32, i32> = HashMap::new();
        map.insert(0, -1);
        for (idx, n) in nums.iter().enumerate() {
            partial_sum[idx] = (sum + n) % k;
            sum = partial_sum[idx];
            if let Some(entry) = map.get(&sum) {
                if entry + 1 < idx as i32 {
                    return true;
                }
            } else {
                map.insert(sum, idx as i32);
            }
        }
        false
    }
}

#[cfg(test)]
mod tests {
    use crate::lc523::Solution;

    #[test]
    fn run() {
        assert!(Solution::check_subarray_sum(vec![23, 2, 6, 4, 7], 6));
        assert!(Solution::check_subarray_sum(vec![23, 2, 4, 6, 6], 7));
        assert!(!Solution::check_subarray_sum(vec![1, 0], 2));
        assert!(Solution::check_subarray_sum(vec![2, 4, 3], 6));
    }
}
