/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const map = {};
  let res = -1;
  for (let i = 0; i < cards.length; ++i) {
    if (map[cards[i]] !== undefined) {
      if (res == -1) {
        res = i - map[cards[i]] + 1;
      } else {
        res = Math.min(res, i - map[cards[i]] + 1);
      }
    }
    map[cards[i]] = i;
  }
  return res;
};

module.exports = minimumCardPickup;
