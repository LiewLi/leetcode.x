/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
  const visited = Array(10).fill(false);
  let res = Number.MAX_SAFE_INTEGER;
  let num = n;
  let nlen = 0;
  while (num > 0) {
    nlen += 1;
    num = Math.floor(num / 10);
  }

  const beautifyNumber = arr => {
    const len = arr.reduce((a, b) => a + b, 0);
    if (len < nlen) return false;
    const nums = [];
    for (const a of arr) {
      for (let i = 0; i < a; ++i) {
        nums.push(a);
      }
    }
    nums.sort((a, b) => a - b);
    const permute = (array, k, n) => {
      const v = array.reduce((a, b) => a * 10 + b, 0);
      if (v > n) {
        res = Math.min(res, v);
        return true;
      }

      for (let i = k; i < array.length; ++i) {
        let a = [...array];
        [a[i], a[k]] = [a[k], a[i]];
        b = a.slice(k + 1);
        b.sort((s, t) => s - t);
        a = [...a.slice(0, k + 1), ...b];
        if (permute(a, k + 1, n)) return true;
      }

      return false;
    };

    return permute(nums, 0, n);
  };

  const dfs = arr => {
    if (beautifyNumber(arr)) return true;
    for (let i = 1; i < 10; ++i) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs([...arr, i]);
      visited[i] = false;
    }
    return false;
  };

  for (let i = 1; i < 10; ++i) {
    visited[i] = true;
    dfs([i]);
    visited[i] = false;
  }

  return res;
};

module.exports = nextBeautifulNumber;
