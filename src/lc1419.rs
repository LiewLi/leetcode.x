struct Solution;

use std::collections::HashMap;
use std::collections::VecDeque;

impl Solution {
    pub fn min_number_of_frogs(croak_of_frogs: String) -> i32 {
        if croak_of_frogs.len() <= 0 || croak_of_frogs.len() % 5 != 0 {
            return -1;
        }
        let arr: Vec<i32> = croak_of_frogs
            .chars()
            .map(|a| match a {
                'c' => 0,
                'r' => 1,
                'o' => 2,
                'a' => 3,
                'k' => 4,
                _ => return -1,
            })
            .collect();
        let mut last_index: Vec<VecDeque<usize>> = vec![VecDeque::new(); 5];
        let mut frogs = vec![0; croak_of_frogs.len() / 5];
        let mut slot_cnt = 0;

        for a in arr {
            let idx_arr = &mut last_index[a as usize];
            if idx_arr.len() > 0 {
                let idx = idx_arr.pop_front().unwrap();
                frogs[idx] = a;
                if a == 4 {
                    frogs[idx] = -1;
                }
                last_index[(frogs[idx] + 1) as usize].push_back(idx);
            } else {
                if a != 0 {
                    return -1;
                }
                slot_cnt += 1;
                last_index[1].push_back(slot_cnt - 1);
            }
        }

        if frogs[0] != -1 {
            -1
        } else {
            slot_cnt as i32
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::min_number_of_frogs("croakcroak".to_owned()),
            1
        );
        assert_eq!(
            super::Solution::min_number_of_frogs("crcoakroak".to_owned()),
            2
        );
        assert_eq!(
            super::Solution::min_number_of_frogs("croakcrook".to_owned()),
            -1
        );

        assert_eq!(
            super::Solution::min_number_of_frogs("croakroak".to_owned()),
            -1
        );
    }
}
