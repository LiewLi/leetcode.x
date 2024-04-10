/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  piles.sort((a, b) => a - b);
  let left = 1;
  let right = piles[piles.length - 1];
  let res = right;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hr = 0;
    for (const p of piles) {
      hr += Math.ceil(p / mid);
    }
    if (hr <= h) {
      right = mid;
      res = mid;
    } else {
      left = mid + 1;
    }
  }
  return res;
};

module.exports = minEatingSpeed;
