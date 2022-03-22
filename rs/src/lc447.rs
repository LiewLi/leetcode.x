struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn number_of_boomerangs(points: Vec<Vec<i32>>) -> i32 {
        let mut cnt = 0;

        for (i, p) in points.iter().enumerate() {
            let mut map = HashMap::new();
            for (j, q) in points.iter().enumerate() {
                if i == j {
                    continue;
                }
                let d = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
                let entry = map.entry(d).or_insert(0);
                *entry += 1;
                if *entry > 1 {
                    cnt += (*entry << 1) - 2
                }
            }
        }

        cnt
    }
}

#[cfg(test)]
mod tests {
    use crate::lc447::Solution;

    #[test]
    fn run() {
        assert_eq!(
            Solution::number_of_boomerangs(vec![vec![0, 0], vec![1, 0], vec![2, 0]]),
            2
        )
    }
}
