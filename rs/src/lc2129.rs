struct Solution;

impl Solution {
    pub fn capitalize_title(title: String) -> String {
        title
            .split(" ")
            .map(|w| {
                if w.len() <= 2 {
                    w.to_lowercase()
                } else {
                    let mut word = w.to_lowercase();
                    word.replace_range(0..1, &word[0..1].to_uppercase());
                    word
                }
            })
            .collect::<Vec<String>>()
            .join(" ")
    }
}

#[cfg(test)]
mod tests {
    use crate::lc2129::Solution;

    #[test]
    fn run() {
        assert_eq!(
            Solution::capitalize_title("capiTalIze tHe titLe".to_string()),
            "Capitalize The Title"
        )
    }
}
