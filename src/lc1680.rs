struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn concatenated_binary(n: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;

        fn binary_cnt(n: i32) -> u32 {
            let mut cnt = 0;
            let mut v = n;
            while v > 0 {
                v /= 2;
                cnt += 1
            }
            cnt
        }

        // let mut cache: HashMap<u32, i64> = HashMap::new();

        // fn mod_pow(p: u32, cache: &mut HashMap<u32, i64>) -> i64 {
        //     if p == 0 {
        //         return 1;
        //     }
        //     match cache.get(&p) {
        //         Some(v) => *v,
        //         None => {
        //             let mut r = mod_pow(p / 2, cache);
        //             r *= r;
        //             if p % 2 != 0 {
        //                 r *= 2;
        //             }
        //             r %= MOD;
        //             cache.insert(p, r);
        //             r
        //         }
        //     }
        // }

        let mut sum: i64 = 0;
        // let mut p = 0;
        // for m in (1..=n).rev() {
        //     sum += (m as i64) * mod_pow(p, &mut cache);
        //     sum %= MOD;
        //     p += binary_cnt(m);
        // }
        for m in 1..=n {
            sum <<= binary_cnt(m);
            sum |= m as i64;
            sum %= MOD;
        }

        sum as i32
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn run() {
        assert_eq!(Solution::concatenated_binary(3), 27);
        assert_eq!(Solution::concatenated_binary(12), 505379714);
    }
}
