struct Solution;

impl Solution {
    pub fn sum_of_three(num: i64) -> Vec<i64> {
        if num % 3 != 0 {
            return vec![];
        }
        let n = num / 3 - 1;
        return vec![n, n + 1, n + 2];
    }
}
