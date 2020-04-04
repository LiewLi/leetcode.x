/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  let i = 0;
  while (i < data.length) {
    let b = 0b10000000;
    let cnt = 0;
    while (b && data[i] & b) {
      b >>= 1;
      cnt++;
    }
    if (cnt == 1 || cnt > 4 || i + cnt > data.length) return false;
    for (let j = 1; j < cnt; ++j) {
      if ((data[i + j] & 0b11000000) !== 0b10000000) {
        return false;
      }
    }
    if (cnt) i += cnt;
    else i++;
  }

  return true;
};
