/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  dict.sort((a, b) => a.length - b.length);
  return sentence.replace(/(\w*)/g, (m, word) => {
    for (const r of dict) {
      if (word.indexOf(r) === 0) {
        return r;
      }
    }
    return word;
  });
};
