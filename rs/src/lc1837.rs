struct Solution;

impl Solution {
    pub fn sum_base(n: i32, k: i32) -> i32 {
        let mut sum = 0;
        let mut n = n;
        while n > 0 {
            sum += n % k;
            n /= k;
        }
        sum
    }
}

#[cfg(test)]
mod tests {
    use crate::lc1837::Solution;

    #[test]
    fn run() {
        assert_eq!(Solution::sum_base(34, 6), 9)
    }
}
