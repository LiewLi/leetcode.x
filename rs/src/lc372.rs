struct Solution;

impl Solution {
    pub fn super_pow_util(a: i32, b: &mut Vec<i32>) -> i32 {
        let non_zero_idx = b.iter().position(|d| *d != 0);
        if non_zero_idx.is_none() {
            return 1;
        }
        const MOD: i32 = 1337;
        let idx = non_zero_idx.unwrap();
        let mut p = a % MOD;
        let mut ans = 1;

        let last = b.len() - 1;
        if b[last] % 2 == 1 {
            ans *= p % MOD;
            b[last] -= 1;
        }
        p *= p;
        p %= MOD;

        let mut carry = 0;
        let i = idx;
        for i in i..b.len() {
            let v = carry * 10 + b[i];
            carry = v % 2;
            b[i] = v / 2;
        }

        (ans * Self::super_pow_util(p, b)) % MOD
    }
    pub fn super_pow(a: i32, b: Vec<i32>) -> i32 {
        let mut b = b;
        return Self::super_pow_util(a, &mut b);
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::super_pow(2, vec![1, 0]), 1024);
        assert_eq!(super::Solution::super_pow(2147483647, vec![2, 0, 0]), 1198);
    }
}
