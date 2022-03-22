struct Solution;

impl Solution {
    pub fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        let mut intervals = intervals;
        intervals.sort_by(|a, b| (a[0], a[1]).cmp(&(b[0], b[1])));
        let mut dp = vec![1; intervals.len()];
        for i in 1..intervals.len() {
            dp[i] = dp[i].max(dp[i - 1]);
            for j in (0..i).rev() {
                if 1 + dp[j] <= dp[i] {
                    break;
                }
                if intervals[i][0] >= intervals[j][1] {
                    dp[i] = dp[i].max(1 + dp[j]);
                    break;
                }
            }
        }

        intervals.len() as i32 - dp[intervals.len() - 1]
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::erase_overlap_intervals(vec![
                vec![1, 2],
                vec![2, 3],
                vec![3, 4],
                vec![1, 3]
            ]),
            1
        )
    }
}
