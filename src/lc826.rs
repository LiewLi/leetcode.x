
struct Solution;

impl Solution {
    pub fn max_profit_assignment(difficulty: Vec<i32>, profit: Vec<i32>, worker: Vec<i32>) -> i32 {
        let mut tasks:Vec<(i32, i32)> = difficulty
        .iter()
        .enumerate()
        .map(|(idx,v)| (*v, profit[idx]))
        .collect();

        tasks.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap());

        let mut maxProfit = 0;

        for (d, p) in &mut tasks {
            maxProfit = std::cmp::max(*p, maxProfit);
            *p = maxProfit;
        }

        worker
        .iter()
        .map(|a| {
            let mut s = 0usize;
            let mut e = tasks.len()-1;
            while s <= e {
                let mid = s + (e - s) / 2;
                if *a < tasks[mid].0 {
                    if mid <= 0 {break;} else {e = mid-1;};
                } else {
                    s = mid + 1;
                }
            }
            if tasks[e].0 <= *a {
                tasks[e].1
            } else {
                0
            }
        })
        .fold(0, |a, b| a + b)
    }
}


#[cfg(test)]
mod tests {
    use crate::lc826::Solution;

    #[test]
    fn run() {
        assert_eq!(Solution::max_profit_assignment(vec![2, 4, 6, 8, 10], vec![10, 20, 30, 40, 50], vec![4, 5, 6, 7]), 100);
        assert_eq!(Solution::max_profit_assignment(vec![85, 47, 57], vec![24, 66, 99], vec![40, 25, 25]), 0);
    }
}