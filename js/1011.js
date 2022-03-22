/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let low = 0;
  let high = 0;
  for (const w of weights) {
    low = Math.max(low, w);
    high += w;
  }

  const _ = cap => {
    let d = 0;
    let k = 0;
    for (const w of weights) {
      if (k + w > cap) {
        d++;
        k = w;
      } else k += w;
      if (d > D) return false;
    }
    return d + 1 <= D;
  };

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (_(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
