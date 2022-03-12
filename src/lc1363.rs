struct Solution;

impl Solution {
    fn freq_to_str(freq: Vec<i32>) -> String {
        let mut arr = vec![];
        for d in (0..10).rev() {
            for _ in 0..freq[d] {
                arr.push(d);
            }
        }
        let ans = arr
            .iter()
            .skip_while(|a| **a == 0)
            .map(|a| a.to_string())
            .collect();
        if ans == "" && arr.len() > 0 {
            "0".to_owned()
        } else {
            ans
        }
    }

    pub fn largest_multiple_of_three(digits: Vec<i32>) -> String {
        let sum: i32 = digits.iter().sum();
        let mut freq = vec![0; 10];
        for d in digits {
            freq[d as usize] += 1;
        }

        let mut dec = |arr: Vec<i32>, count: i32| -> bool {
            let mut cnt = 0;
            for a in arr {
                if freq[a as usize] > 0 {
                    freq[a as usize] -= 1;
                    cnt += 1;
                    if cnt >= count {
                        return true;
                    }
                }
            }
            false
        };

        if sum % 3 == 1 {
            if !dec(vec![1, 4, 7], 1) {
                dec(vec![2, 2, 5, 5, 8, 8], 2);
            }
        } else if sum % 3 == 2 {
            if !dec(vec![2, 5, 8], 1) {
                dec(vec![1, 1, 4, 4, 7, 7], 2);
            }
        }

        Solution::freq_to_str(freq)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::largest_multiple_of_three(vec![8, 6, 7, 1, 0]),
            "8760".to_owned()
        );

        assert_eq!(
            super::Solution::largest_multiple_of_three(vec![1, 1, 1]),
            "111".to_owned()
        );

        assert_eq!(
            super::Solution::largest_multiple_of_three(vec![1, 1, 1, 2]),
            "111".to_owned()
        );

        assert_eq!(
            super::Solution::largest_multiple_of_three(vec![2, 2, 1, 1, 1]),
            "2211".to_owned()
        );
    }
}
