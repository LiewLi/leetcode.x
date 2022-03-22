struct Solution;

impl Solution {
    pub fn num_rescue_boats(people: Vec<i32>, limit: i32) -> i32 {
        let mut people = people;
        people.sort();
        let mut s = 0;
        let mut e = people.len() - 1;
        let mut ans = 0;
        while s < e {
            if people[s] + people[e] <= limit {
                ans += 1;
                s += 1;
                e -= 1;
            } else {
                ans += 1;
                e -= 1;
            }
        }
        if s == e {
            ans += 1;
        }
        ans as i32
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn run() {
        assert_eq!(super::Solution::num_rescue_boats(vec![3, 2, 2, 1], 3), 3);
    }
}
