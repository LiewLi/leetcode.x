struct Solution;

impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        let mut prefix_sum = vec![0; card_points.len() + 1];
        for i in 0..card_points.len() {
            prefix_sum[i + 1] = prefix_sum[i] + card_points[i];
        }
        let mut max_sum = 0;
        for i in 0..=k as usize {
            max_sum = max_sum.max(
                prefix_sum[i] + prefix_sum[card_points.len()]
                    - prefix_sum[card_points.len() - k as usize + i],
            );
        }
        max_sum
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::max_score(vec![1, 2, 3, 4, 5, 6, 1], 3), 12);
    }
}
