function TrieNode() {
  this.children = new Array(26).fill(null);
  this.endOfWord = false;
}
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let curNode = this.root;
  for (const ch of word) {
    const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    if (!curNode.children[idx]) {
      curNode.children[idx] = new TrieNode();
    }
    curNode = curNode.children[idx];
  }
  curNode.endOfWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  function util(curNode, word) {
    if (!curNode) return false;
    for (let i = 0; i < word.length; ++i) {
      const ch = word[i];
      const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (ch === ".") {
        for (const child of curNode.children) {
          if (util(child, word.substring(i + 1))) return true;
        }
        return false;
      } else {
        if (!curNode || !curNode.children[idx]) return false;
        curNode = curNode.children[idx];
      }
    }
    return curNode.endOfWord;
  }
  return util(this.root, word);
};

var obj = new WordDictionary();
obj.addWord("bad");
obj.addWord("dad");
obj.addWord("mad");
console.log(obj.search("pad"));
console.log(obj.search("bad"));
console.log(obj.search(".ad"));
console.log(obj.search("b.."));
