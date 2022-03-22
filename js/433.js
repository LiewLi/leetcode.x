/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (!bank.includes(end)) return -1;
  const que = [end];
  const set = new Set();
  const _ = (n1, n2) => {
    if (n1.length !== n2.length) return false;
    let diff = false;
    for (let i = 0; i < n1.length; ++i) {
      if (n1[i] !== n2[i]) {
        if (diff) return false;
        else {
          diff = true;
        }
      }
    }
    return diff;
  };
  let level = 0;
  while (que.length) {
    level++;
    const size = que.length;
    for (let i = 0; i < size; ++i) {
      const g = que.shift();
      if (_(g, start)) return level;
      set.add(g);
      for (const b of bank) {
        if (!set.has(b) && _(b, g)) {
          que.push(b);
        }
      }
    }
  }

  return -1;
};

console.log(
  minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"])
);
