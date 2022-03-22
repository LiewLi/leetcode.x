struct Solution;

use std::collections::{BinaryHeap, HashMap};

impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut cnt_map = HashMap::new();
        let mut top_heap = BinaryHeap::new();

        for n in nums {
            let entry = cnt_map.entry(n).or_insert(0);
            *entry += 1;
        }

        for (k, v) in cnt_map {
            top_heap.push((v, k))
        }

        let mut top_k_arr = vec![];
        for _ in 0..k {
            top_k_arr.push(top_heap.pop().unwrap().1);
        }

        top_k_arr
    }
}

#[cfg(test)]
mod tests {
    use crate::lc347::Solution;

    #[test]
    fn run() {
        let mut top_k = Solution::top_k_frequent(vec![1, 1, 1, 2, 2, 3], 2);
        top_k.sort();
        assert_eq!(top_k, [1, 2])
    }
}
