struct Solution;

impl Solution {
    pub fn split_number(num: i64) -> Vec<i64> {
        let mut arr = vec![];
        let mut num = num;
        while num > 0 {
            arr.push(num % 10);
            num /= 10;
        }
        arr.reverse();
        arr
    }

    pub fn comb_numbers(arr: Vec<i64>) -> i64 {
        arr.iter().fold(0, |a, b| a * 10 + *b)
    }

    pub fn smallest_number(num: i64) -> i64 {
        let mut arr = Solution::split_number(num.abs());

        if num < 0 {
            arr.sort_by(|a, b| b.cmp(a));
            return -Solution::comb_numbers(arr);
        } else {
            arr.sort();
            let nonzero = arr.iter().position(|a| *a != 0);
            match nonzero {
                Some(idx) => {
                    let mut leading_arr = vec![0; idx + 1];
                    leading_arr[0] = arr[idx];
                    arr.splice(0..=idx, leading_arr);
                    Solution::comb_numbers(arr)
                }
                None => 0,
            }
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::smallest_number(310), 103);
        assert_eq!(super::Solution::smallest_number(-7605), -7650);
    }
}
