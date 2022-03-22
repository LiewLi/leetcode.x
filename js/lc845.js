/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let maxN = 0;
  let asc = [];
  let desc = [];

  const calcLength = () => {
    maxN = Math.max(
      maxN,
      desc.length && asc.length > 1 ? asc.length + desc.length : 0
    );
  };

  for (const n of A) {
    if (asc.length <= 0 || (desc.length <= 0 && asc[asc.length - 1] < n))
      asc.push(n);
    else if (
      (desc.length <= 0 && n < asc[asc.length - 1]) ||
      desc[desc.length - 1] > n
    )
      desc.push(n);
    else {
      calcLength();
      asc = desc[desc.length - 1] < n ? [desc[desc.length - 1], n] : [n];
      desc = [];
    }
  }
  calcLength();
  return maxN;
};
