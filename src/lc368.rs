struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn largest_divisible_subset(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        let mut edges = vec![vec![]; nums.len()];
        nums.sort();
        for i in 0..nums.len() {
            for j in i..nums.len() {
                if nums[j] % nums[i] == 0 {
                    edges[i].push(j);
                }
            }
        }

        #[derive(Clone)]
        struct Pair(i32, Vec<usize>);

        fn dfs(
            node: usize,
            edges: &Vec<Vec<usize>>,
            visited: &mut Vec<bool>,
            cache: &mut HashMap<usize, Pair>,
        ) -> Pair {
            if let Some(p) = cache.get(&node) {
                return p.clone();
            }
            visited[node] = true;
            let mut max_child_level = Pair(0, vec![]);
            for c in &edges[node] {
                if visited[*c] {
                    continue;
                }
                let child = dfs(*c, edges, visited, cache);
                if child.0 > max_child_level.0 {
                    max_child_level = child;
                }
            }
            visited[node] = false;
            max_child_level.1.push(node);
            let p = Pair(1 + max_child_level.0, max_child_level.1);
            cache.insert(node, p.clone());
            return p;
        };
        let mut max_len_pair = Pair(0, vec![]);
        let mut cache: HashMap<usize, Pair> = HashMap::new();
        for n in 0..nums.len() {
            let mut visited = vec![false; nums.len()];
            let level = dfs(n, &edges, &mut visited, &mut cache);
            if level.0 > max_len_pair.0 {
                max_len_pair = level;
            }
        }

        max_len_pair.1.iter().rev().map(|idx| nums[*idx]).collect()
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(
            super::Solution::largest_divisible_subset(vec![
                5, 9, 18, 54, 108, 540, 90, 180, 360, 720
            ]),
            vec![9, 18, 90, 180, 360, 720]
        )
    }
}
