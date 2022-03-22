/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  const N = deck.length;
  const ret = [];
  const idx = [];
  for (let i = 0; i < N; ++i) {
    idx[i] = i;
  }
  deck.sort((a, b) => a - b);
  for (const d of deck) {
    ret[idx.shift()] = d;
    if (idx.length) idx.push(idx.shift());
  }
  return ret;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
