/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function(n, m) {
  if (n == 0 || m == 0) return 1;
  if (n <= 1) return 2;
  if (m <= 1) return 3 + (n <= 2 ? 0 : 1);
  if (n <= 2) return 3 + (m >= 2 ? 1 : 0);
  return 7 + (m >= 3 ? 1 : 0);
};
