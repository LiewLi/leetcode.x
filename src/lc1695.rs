struct Solution;

use std::cmp::max;
use std::collections::HashMap;

impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let mut prefix_sum = vec![0];
        let mut sum_so_far = 0;
        let mut max_sum = 0;
        let mut index_map = HashMap::new();
        let mut max_index = 0;
        for (idx, n) in nums.iter().enumerate() {
            sum_so_far += n;
            prefix_sum.push(sum_so_far);

            let found_index = index_map.get(n).unwrap_or(&0);
            max_index = max(max_index, *found_index);

            index_map.insert(n, idx + 1);

            max_sum = max(max_sum, sum_so_far - prefix_sum[max_index])
        }

        max_sum
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn run() {
        assert_eq!(Solution::maximum_unique_subarray(vec![4, 2, 4, 5, 6]), 17)
    }
}
