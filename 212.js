function Node(val) {
  this.val = val;
  this.children = [];
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const M = board.length;
  const N = board[0].length;

  const map = [];
  const nodes = [];

  for (let i = 0; i < M; ++i) {
    nodes[i] = [];
    for (let j = 0; j < N; ++j) {
      const idx = board[i][j].charCodeAt(0) - "a".charCodeAt(0);
      const node = new Node(board[i][j]);
      nodes[i][j] = node;
      map[idx] = map[idx] || [];
      map[idx].push(node);
    }
  }

  for (let i = 0; i < M; ++i) {
    for (let j = 0; j < N; ++j) {
      const node = nodes[i][j];
      if (i - 1 >= 0) {
        node.children.push(nodes[i - 1][j]);
      }
      if (i + 1 < M) {
        node.children.push(nodes[i + 1][j]);
      }
      if (j - 1 >= 0) {
        node.children.push(nodes[i][j - 1]);
      }
      if (j + 1 < N) {
        node.children.push(nodes[i][j + 1]);
      }
    }
  }

  function dfs(node, word, idx, set) {
    if (idx >= word.length) {
      return true;
    }
    if (node.val !== word[idx]) return false;
    else if (idx === word.length - 1) return true;
    set.add(node);
    for (const ch of node.children) {
      if (!set.has(ch) && dfs(ch, word, idx + 1, set)) return true;
    }
    set.delete(node);
    return false;
  }

  const ret = new Set();
  for (const w of words) {
    if (w.length <= 0) continue;
    for (const m of map[w.charCodeAt(0) - "a".charCodeAt(0)] || []) {
      if (dfs(m, w, 0, new Set())) {
        ret.add(w);
        continue;
      }
    }
  }

  return [...ret];
};

const board = [
  ["b", "a", "a", "b", "a", "b"],
  ["a", "b", "a", "a", "a", "a"],
  ["a", "b", "a", "a", "a", "b"],
  ["a", "b", "a", "b", "b", "a"],
  ["a", "a", "b", "b", "a", "b"],
  ["a", "a", "b", "b", "b", "a"],
  ["a", "a", "b", "a", "a", "b"]
];
const words = [
  "bbaabaabaaaaabaababaaaaababb",
  "aabbaaabaaabaabaaaaaabbaaaba",
  "babaababbbbbbbaabaababaabaaa",
  "bbbaaabaabbaaababababbbbbaaa",
  "babbabbbbaabbabaaaaaabbbaaab",
  "bbbababbbbbbbababbabbbbbabaa",
  "babababbababaabbbbabbbbabbba",
  "abbbbbbaabaaabaaababaabbabba",
  "aabaabababbbbbbababbbababbaa",
  "aabbbbabbaababaaaabababbaaba",
  "ababaababaaabbabbaabbaabbaba",
  "abaabbbaaaaababbbaaaaabbbaab",
  "aabbabaabaabbabababaaabbbaab",
  "baaabaaaabbabaaabaabababaaaa",
  "aaabbabaaaababbabbaabbaabbaa",
  "aaabaaaaabaabbabaabbbbaabaaa",
  "abbaabbaaaabbaababababbaabbb",
  "baabaababbbbaaaabaaabbababbb",
  "aabaababbaababbaaabaabababab",
  "abbaaabbaabaabaabbbbaabbbbbb",
  "aaababaabbaaabbbaaabbabbabab",
  "bbababbbabbbbabbbbabbbbbabaa",
  "abbbaabbbaaababbbababbababba",
  "bbbbbbbabbbababbabaabababaab",
  "aaaababaabbbbabaaaaabaaaaabb",
  "bbaaabbbbabbaaabbaabbabbaaba",
  "aabaabbbbaabaabbabaabababaaa",
  "abbababbbaababaabbababababbb",
  "aabbbabbaaaababbbbabbababbbb",
  "babbbaabababbbbbbbbbaabbabaa"
];

console.log(findWords(board, words));
