
struct Solution;

impl Solution {
    pub fn get_descent_periods(prices: Vec<i32>) -> i64 {
        let mut cnt = 0i64;
        let mut s = 0usize;
        let mut e = s;
        while s < prices.len() {
            if e < prices.len() && (s == e || prices[e] + 1 == prices[e-1]) {
                e += 1;
            } else {
                cnt += ((e-s)*(e-s-1) / 2 + e-s) as i64;
                s = e;
            }
        }
        cnt
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn run() {
        assert_eq!(Solution::get_descent_periods(vec![3, 2, 1, 4]), 7);

        assert_eq!(Solution::get_descent_periods(vec![8, 6, 7, 7]), 4);
    }
}
