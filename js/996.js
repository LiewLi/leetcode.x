/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
  function isSquare(arr) {
    for (let i = 1; i < arr.length; ++i) {
      const n = arr[i] + arr[i - 1];
      const sn = Math.floor(Math.sqrt(n));
      if (sn * sn !== n) return false;
    }
    return true;
  }
  const map = {};
  function permutation(arr) {
    const set = new Set();
    if (arr.length <= 1) return [arr];
    const key = arr.join(",");
    if (key in map) return map[key];
    const ret = [];
    for (let i = 0; i < arr.length; ++i) {
      const copy = [...arr];
      copy.splice(i, 1);
      const p = permutation(copy);
      for (const q of p) {
        if (!isSquare(q)) continue;
        const a = [arr[i]].concat(q);
        const k = a.join(",");
        if (isSquare(a) && !set.has(k)) {
          ret.push(a);
          set.add(k);
        }
      }
    }

    return (map[key] = ret);
  }
  return new Set(permutation(A).map(a => a.join(","))).size;
};

console.log(numSquarefulPerms([1, 17, 8]));
