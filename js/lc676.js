var MagicDictionary = function() {
  this.internalArr = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.internalArr.push(...dictionary);
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  const diff1 = word => {
    if (word.length != searchWord.length) {
      return false;
    }
    let cnt = 0;
    for (let i = 0; i < word.length; ++i) {
      if (word.charAt(i) != searchWord.charAt(i)) {
        ++cnt;
      }
      if (cnt >= 2) return false;
    }
    return cnt == 1;
  };
  for (const word of this.internalArr) {
    if (diff1(word)) {
      return true;
    }
  }
  return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
