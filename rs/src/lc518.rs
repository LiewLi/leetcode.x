struct Solution;

use std::collections::HashMap;
impl Solution {
    fn dfs(amount: i32, coins: &Vec<i32>, cache: &mut HashMap<(i32, i32), i32>, cur: i32) -> i32 {
        if let Some(v) = cache.get(&(amount, cur)) {
            return *v;
        }
        if amount <= 0 {
            return 1;
        }
        let mut ans = 0;
        for c in coins {
            if *c > amount || *c > cur {
                break;
            }
            ans += Self::dfs(amount - *c, coins, cache, *c);
        }
        cache.insert((amount, cur), ans);
        ans
    }

    pub fn change(amount: i32, coins: Vec<i32>) -> i32 {
        let mut coins = coins;
        coins.sort();
        let mut cache = HashMap::new();
        return Self::dfs(amount, &coins, &mut cache, amount);
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::change(5, vec![1, 2, 5]), 4);
    }
}
