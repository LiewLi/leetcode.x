struct Solution;

impl Solution {
    pub fn min_flips(s: String) -> i32 {
        let mut map = vec![vec![0; s.len() + 1], vec![0; s.len() + 1]];
        let bytes = s.as_bytes();
        for idx in 0..2 {
            let c = if idx == 0 { '0' } else { '1' };
            let rev_c = if idx == 0 { '1' } else { '0' };
            let mut cnt = 0;
            for i in 0..bytes.len() {
                let d = if i % 2 == 0 { c } else { rev_c } as u8;
                cnt += if bytes[i] == d { 0 } else { 1 };
                map[idx as usize][i + 1] = cnt;
            }
        }

        (0..s.len())
            .map(|idx| {
                let rev = idx % 2 != s.len() % 2;
                vec![0, 1]
                    .iter()
                    .map(|c| {
                        let rev_c = 1 - *c;
                        let d = if rev { rev_c } else { *c };
                        if idx % 2 == 0 {
                            map[*c][s.len()] - map[*c][idx] + map[d][idx]
                        } else {
                            map[rev_c][s.len()] - map[rev_c][idx] + map[d][idx]
                        }
                    })
                    .min()
                    .unwrap()
            })
            .min()
            .unwrap()
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::min_flips("01001001101".to_owned()), 2);
        assert_eq!(super::Solution::min_flips("1110".to_owned()), 1);
        assert_eq!(
            super::Solution::min_flips("10001100101000000".to_owned()),
            5
        );
    }
}
