/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  ages.sort((a, b) => a - b);
  let cnt = 0;

  while (ages.length > 0) {
    const a = ages.pop();
    const low = 0.5 * a + 7;
    let c = 0;
    for (let i = ages.length - 1; i >= 0; --i) {
      if (ages[i] <= low) break;
      else c++;
    }
    cnt += c;
    while (ages[ages.length - 1] === a) {
      ages.pop();
      cnt += c;
    }
  }

  return cnt;
};
