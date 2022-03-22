struct Solution;

impl Solution {
    pub fn smallest_equal(nums: Vec<i32>) -> i32 {
        match nums
            .iter()
            .enumerate()
            .filter(|(idx, n)| *idx as i32 % 10 == **n)
            .nth(0)
        {
            Some((idx, _)) => idx as i32,
            None => -1,
        }
    }
}
