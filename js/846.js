/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  if (hand.length % W !== 0) return false;
  if (W <= 1) return true;
  hand.sort((a, b) => a - b);
  let cur = hand.shift();
  let cnt = 1;
  while (hand.length) {
    if (cnt === W) {
      cur = hand.shift();
      cnt = 1;
    }
    const idx = hand.findIndex(e => e === cur + 1);
    if (idx < 0) return false;
    else {
      cnt++;
      hand.splice(idx, 1);
      cur++;
    }
  }
  return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
