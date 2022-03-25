/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  const N = encoded.length + 1;

  let total = 0;
  for (let i = 1; i <= N; ++i) {
    total ^= i;
  }

  for (let i = 1; i < encoded.length; i += 2) {
    total ^= encoded[i];
  }

  const ans = [total];
  for (const a of encoded) {
    ans.push(ans[ans.length - 1] ^ a);
  }
  return ans;
};

module.exports = decode;
