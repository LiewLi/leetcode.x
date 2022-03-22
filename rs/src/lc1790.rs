struct Solution;

impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        if s1.len() != s2.len() {
            return false;
        }
        let mut pair = None;
        let mut cnt = 0;
        for (idx, c) in s1.chars().enumerate() {
            let d = s2.chars().nth(idx).unwrap();
            if c == d {
                continue;
            }
            if cnt > 2 {
                return false;
            }

            match pair {
                Some((a, b)) => {
                    if !(a == d && b == c) {
                        return false;
                    }
                }
                None => pair = Some((c, d)),
            }

            cnt += 1;
        }

        cnt != 1
    }
}

#[cfg(test)]
mod tests {
    use crate::lc1790::Solution;

    #[test]
    fn run() {
        assert!(Solution::are_almost_equal(
            "bank".to_string(),
            "kanb".to_string()
        ))
    }
}
