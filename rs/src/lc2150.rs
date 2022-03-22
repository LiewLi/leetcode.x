struct Solution;

impl Solution {
    pub fn find_lonely(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        nums.sort();
        nums.iter()
            .enumerate()
            .filter(|(idx, &a)| {
                if *idx > 0 && (a == nums[idx - 1] || a == nums[idx - 1] + 1) {
                    return false;
                } else if *idx < nums.len() - 1 && (a == nums[idx + 1] || a + 1 == nums[idx + 1]) {
                    return false;
                }
                return true;
            })
            .map(|e| *e.1)
            .collect()
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::find_lonely(vec![10, 6, 5, 8]), vec![8, 10]);
    }
}
