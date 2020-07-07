/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
  if (bloomDay.length < m * k) return -1;

  let high = bloomDay[0];
  let low = bloomDay[0];
  bloomDay.forEach(b => {
    low = Math.min(low, b);
    high = Math.max(high, b);
  });

  const _ = t => {
    let cnt = 0;
    let total = 0;
    bloomDay.forEach(b => {
      if (b > t) {
        cnt = 0;
      } else {
        ++cnt;
        if (cnt >= k) {
          ++total;
          cnt = 0;
        }
      }
    });

    return total >= m;
  };

  while (low < high) {
    const mid = low + ((high - low) >> 1);
    if (_(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return _(low) ? low : -1;
};

console.log(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2));
