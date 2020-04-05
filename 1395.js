/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let cnt = 0;
  for (let i = 0; i < rating.length; ++i) {
    for (let j = i + 1; j < rating.length; ++j) {
      if (rating[i] == rating[j]) continue;
      for (let k = j + 1; k < rating.length; ++k) {
        cnt += rating[i] < rating[j] === rating[j] < rating[k] ? 1 : 0;
      }
    }
  }
  return cnt;
};

console.log(numTeams([2, 5, 3, 4, 1]));
