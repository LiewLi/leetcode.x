struct Solution;

impl Solution {
    pub fn reverse_words(s: String) -> String {
        s.split(" ")
            .map(|w| w.chars().rev().collect::<String>())
            .collect::<Vec<String>>()
            .join(" ")
    }
}
#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn run() {
        assert_eq!(
            Solution::reverse_words("Let's take LeetCode contest".to_string()),
            "s'teL ekat edoCteeL tsetnoc"
        )
    }
}
