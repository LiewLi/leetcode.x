struct Solution;

use std::collections::HashMap;
use std::collections::HashSet;

impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        let mut map = HashMap::new();
        let mut set = HashSet::new();
        let mut elements = vec![];
        for i in arr {
            let cnt = map.entry(i).or_insert(0);
            if *cnt == 0 {
                elements.push(i);
            }
            *cnt += 1;
        }

        for e in elements {
            let cnt = map.get(&e).unwrap();
            if set.contains(&cnt) {
                return false;
            } else {
                set.insert(cnt);
            }
        }

        true
    }
}

#[cfg(test)]
mod tests {
    use crate::lc1207::Solution;

    #[test]
    fn run() {
        assert!(Solution::unique_occurrences(vec![1, 2, 2, 1, 1, 3]));
        assert!(!Solution::unique_occurrences(vec![1, 2]));
    }
}
