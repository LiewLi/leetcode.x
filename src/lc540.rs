struct Solution;

// impl Solution {
//     pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
//         nums.iter().fold(0, |a, b| a ^ b)
//     }
// }

impl Solution {
    pub fn single_non_duplicate_util(nums: &Vec<i32>, s: usize, e: usize) -> i32 {
        if s > e {
            0
        } else if s == e {
            nums[s]
        } else if (e - s + 1) % 2 == 0 {
            0
        } else {
            let mid = s + (e - s) / 2;
            if nums[mid] == nums[mid - 1] {
                let left = Solution::single_non_duplicate_util(nums, s, mid - 2);
                if left == 0 {
                    Solution::single_non_duplicate_util(nums, mid + 1, e)
                } else {
                    left
                }
            } else if nums[mid] == nums[mid + 1] {
                let left = Solution::single_non_duplicate_util(nums, s, mid - 1);
                if left == 0 {
                    Solution::single_non_duplicate_util(nums, mid + 2, e)
                } else {
                    left
                }
            } else {
                nums[mid]
            }
        }
    }

    pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
        return Solution::single_non_duplicate_util(&nums, 0, nums.len() - 1);
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::single_non_duplicate(vec![3, 3, 7, 7, 10, 11, 11]),
            10
        );
    }
}
