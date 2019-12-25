/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const _ = t => {
    const [h, m] = t.split(":").map(p => +p);
    return h * 60 + m;
  };
  const time = timePoints.map(t => _(t));
  time.sort((a, b) => a - b);

  let m = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < time.length; ++i) {
    m = Math.min(m, time[i] - time[i - 1]);
  }
  m = Math.min(m, 24 * 60 - time[time.length - 1] + time[0]);

  return m;
};

console.log(findMinDifference(["23:59", "00:00"]));
