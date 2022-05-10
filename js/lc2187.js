/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  if (time.length <= 0 || totalTrips <= 0) return 0;
  time.sort((a, b) => a - b);
  let low = 1;
  let high = totalTrips * time[0];
  const isValid = t => {
    let sum = 0;
    for (const v of time) {
      sum += Math.floor(t / v);
      if (sum >= totalTrips) return true;
    }
    return false;
  };

  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (isValid(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
};

module.exports = minimumTime;
