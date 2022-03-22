struct Solution;

impl Solution {
    fn is_non_zero(mut n: i32) -> bool {
        while n > 0 {
            if n % 10 == 0 {
                return false;
            } else {
                n /= 10;
            }
        }
        true
    }

    pub fn get_no_zero_integers(n: i32) -> Vec<i32> {
        for i in 1..n {
            if Solution::is_non_zero(i) && Solution::is_non_zero(n - i) {
                return vec![i, n - i];
            }
        }
        panic!("not found")
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {}
}
