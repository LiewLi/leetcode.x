struct Solution;

impl Solution {
    pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
        if nums.len() < 1 {
            return 0;
        }
        let mut cnt = 0;
        let mut product = nums[0];
        let mut s = 0;
        let mut e = 0;
        while s < nums.len() {
            if product < k {
                cnt += 1;
            } else {
                product /= nums[s];
                s += 1;
                while product >= k && s <= e {
                    product /= nums[s];
                    if s < e {
                        cnt += e - s;
                    }
                    s += 1;
                }

                if s <= e {
                    cnt += e - s + 1;
                }
            }
            if e + 1 < nums.len() {
                e += 1;
                product *= nums[e];
            } else {
                s += 1;
                while s < nums.len() {
                    cnt += e - s + 1;
                    s += 1;
                }
            }
        }

        cnt as i32
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn run() {
        assert_eq!(
            Solution::num_subarray_product_less_than_k(vec![10, 5, 2, 6], 100),
            8
        );

        assert_eq!(
            Solution::num_subarray_product_less_than_k(vec![1, 1, 1], 2),
            6
        );

        assert_eq!(
            Solution::num_subarray_product_less_than_k(
                vec![10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3],
                19
            ),
            18
        );
    }
}
