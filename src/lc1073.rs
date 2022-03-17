struct Solution;

impl Solution {
    pub fn add_negabinary(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let mut i = 0;
        let mut ans = vec![];
        let mut c = 0;
        while i < arr1.len() || i < arr2.len() {
            let mut r = 0;
            if i < arr1.len() {
                r += arr1[arr1.len() - 1 - i];
            }
            if i < arr2.len() {
                r += arr2[arr2.len() - 1 - i];
            }

            r -= c;
            c = 0;

            if r < 0 {
                r += 2;
                c = -1;
            } else if r >= 2 {
                r -= 2;
                c = 1;
            }

            ans.push(r);
            i += 1;
        }

        if c > 0 {
            ans.push(1);
            ans.push(1);
        } else if c < 0 {
            ans.push(1);
        }

        let ans: Vec<i32> = ans
            .iter()
            .rev()
            .skip_while(|a| **a == 0)
            .map(|a| *a)
            .collect();
        if ans.len() <= 0 {
            vec![0]
        } else {
            ans
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::add_negabinary(vec![1, 1, 1, 1, 1], vec![1, 0, 1]),
            vec![1, 0, 0, 0, 0]
        );

        assert_eq!(
            super::Solution::add_negabinary(vec![1], vec![1, 0, 1]),
            vec![1, 1, 0, 1, 0]
        );
    }
}
