/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  const map = new Array(26).fill(0);
  for (const ch of s) {
    const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    map[idx]++;
  }

  const order = [
    ["zero", "z", 0],
    ["two", "w", 2],
    ["six", "x", 6],
    ["eight", "g", 8],
    ["three", "h", 3],
    ["four", "r", 4],
    ["seven", "s", 7],
    ["five", "f", 5],
    ["nine", "i", 9],
    ["one", "o", 1]
  ];

  const arr = new Array(10).fill(0);

  for (const [word, ch, digit] of order) {
    const cnt = map[ch.charCodeAt(0) - "a".charCodeAt(0)];
    arr[digit] = cnt;
    for (const c of word) map[c.charCodeAt(0) - "a".charCodeAt(0)] -= cnt;
  }
  let ret = "";
  arr.forEach((n, idx) => {
    while (n--) {
      ret += `${idx}`;
    }
  });
  return ret;
};
