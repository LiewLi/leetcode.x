struct Solution;

impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut cnt = (0, 0);
        let mut ans = 0;
        for c in s.chars() {
            if c == 'L' {
                cnt.0 += 1;
            } else if c == 'R' {
                cnt.1 += 1;
            }
            if cnt.0 == cnt.1 {
                ans += 1;
                cnt = (0, 0)
            }
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::balanced_string_split("RLRRLLRLRL".to_owned()),
            4
        )
    }
}
