/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  const set = new Set();
  let d = 1 % K;
  let cnt = 1;
  while (d) {
    if (!set.has(d)) set.add(d);
    else return -1;

    d = (10 * d + 1) % K;
    cnt++;
  }
  return cnt;
};

console.log(smallestRepunitDivByK(3));
