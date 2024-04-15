/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const res = [];
  for (let i = 0; i < searchWord.length; ++i) {
    const subWord = searchWord.substring(0, i + 1);
    const searchRes = [];
    for (const p of products) {
      if (p.startsWith(subWord)) {
        searchRes.push(p);
        if (searchRes.length >= 3) {
          break;
        }
      }
    }
    res.push(searchRes);
  }
  return res;
};

module.exports = suggestedProducts;
