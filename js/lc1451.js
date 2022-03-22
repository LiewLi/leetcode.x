/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  return text
    .split(" ")
    .sort((a, b) => a.length - b.length || a - b)
    .map(
      (w, idx) => (idx == 0 ? w.toUpperCase() : w.toLowerCase())[0] + w.slice(1)
    )
    .join(" ");
};
