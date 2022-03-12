struct Solution;

use std::collections::HashSet;
impl Solution {
    fn can_concat(word: &str, words: &HashSet<&str>) -> bool {
        if word.len() <= 0 {
            return false;
        }
        let mut dp = vec![false; word.len() + 1];
        dp[0] = true;
        for i in 1..=word.len() {
            for j in 0..i {
                if !dp[j] {
                    continue;
                }
                if words.contains(&word[j..i]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        dp[word.len()]
    }
    pub fn find_all_concatenated_words_in_a_dict(words: Vec<String>) -> Vec<String> {
        let mut words = words;
        words.sort_by(|a, b| a.len().cmp(&b.len()));
        let mut arr = vec![];
        let mut pre_words = HashSet::new();
        for w in &words {
            if Solution::can_concat(w, &pre_words) {
                arr.push(w.to_owned());
            }
            pre_words.insert(w);
        }
        arr
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::find_all_concatenated_words_in_a_dict(vec![
                "cat".to_string(),
                "dog".to_string(),
                "catdog".to_string()
            ]),
            vec!["catdog".to_string()]
        )
    }
}
