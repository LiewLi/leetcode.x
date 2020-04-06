/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let ret = 0;
  let maxBlue = -1;
  let maxOn = -1;
  const arr = new Array(light.length).fill(0);
  for (const b of light) {
    arr[b - 1] = 1;
    maxOn = Math.max(maxOn, b - 1);
    let i = Math.max(0, maxBlue);
    for (; i <= maxOn; ++i) {
      if (!arr[i]) break;
    }
    maxBlue = i - 1;

    ret += maxBlue == maxOn ? 1 : 0;
  }

  return ret;
};

console.log(numTimesAllBlue([2, 1, 3, 5, 4]));
