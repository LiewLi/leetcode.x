/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if (citations.length <= 0) return 0;
  citations.sort((a, b) => b - a);
  if (citations[citations.length - 1] >= citations.length)
    return citations.length;
  if (citations[0] <= 0) return 0;

  let k = citations.length;
  while (citations[k - 1] < k) {
    k--;
  }
  return k;
};

console.log(hIndex([1, 2]));
