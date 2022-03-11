use std::os::unix::prelude::OsStrExt;

struct Solution;

impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        let mut arr = vec![];
        let mut idx_arr = vec![];
        let ss = s.as_bytes();
        for i in 0..s.len() {
            let c = ss[i] as char;
            if c >= '0' && c <= '9' {
                continue;
            }
            idx_arr.push(i);
        }

        let low_a = 'a' as u8;
        let up_a = 'A' as u8;
        let d = low_a - up_a;
        for i in 0..1 << idx_arr.len() {
            let mut c_arr = ss.to_vec();
            for j in 0..idx_arr.len() {
                let k = idx_arr[j];
                let c = c_arr[k];
                if (1 << j) & i != 0 {
                    if c < low_a {
                        c_arr[k] = c + d;
                    } else {
                        c_arr[k] = c - d;
                    }
                }
            }
            arr.push(c_arr.iter().map(|a| *a as char).collect());
        }

        return arr;
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::letter_case_permutation("a1b2".to_string()),
            vec!["a1b2", "A1b2", "a1B2", "A1B2"]
        );
    }
}
