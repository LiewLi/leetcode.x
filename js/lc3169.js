/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  meetings.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let res = days;
  let left = meetings[0][0];
  let right = meetings[0][1];
  res -= right - left + 1;
  for (let i = 1; i < meetings.length; ++i) {
    const m = meetings[i];
    if (m[1] <= right) continue;
    else {
      left = Math.max(m[0], right + 1);
      right = m[1];
      if (right >= left) res -= right - left + 1;
    }
  }
  return res;
};
module.exports = countDays;
