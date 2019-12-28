/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const arr = new Array(26).fill(0);
  for (const t of tasks) {
    const idx = t.charCodeAt(0) - "A".charCodeAt(0);
    arr[idx]++;
  }

  let cnt = 0;
  while (true) {
    arr.sort((a, b) => b - a);
    let r = n + 1;
    for (let i = 0; i < 26 && r; ++i) {
      if (arr[i]) {
        arr[i]--;
        r--;
        cnt++;
      }
    }
    if (arr.every(a => !a)) break;
    cnt += r;
  }
  return cnt;
};

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
