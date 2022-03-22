struct Solution;

impl Solution {
    pub fn gray_code(n: i32) -> Vec<i32> {
        if n == 1 {
            return vec![0, 1];
        }
        let mut arr = Self::gray_code(n - 1);
        let mut a = arr
            .iter()
            .rev()
            .map(|a| (1 << n - 1) + *a)
            .collect::<Vec<i32>>();
        arr.append(&mut a);
        arr
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::gray_code(2), vec![0, 1, 3, 2])
    }
}
