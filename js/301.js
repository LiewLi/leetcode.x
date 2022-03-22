/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  function valid(s) {
    let open = 0;
    for (const c of s) {
      if (c === "(") open++;
      else if (c === ")") {
        if (--open < 0) return false;
      }
    }
    return open === 0;
  }

  function remove(s, idx) {
    const arr = s.split("");
    arr.splice(idx, 1);
    return arr.join("");
  }

  function bfs(s) {
    const seen = new Set();
    const que = [s];
    const ret = new Set();
    while (que.length) {
      const size = que.length;
      for (let i = 0; i < size; ++i) {
        const e = que.shift();
        if (valid(e)) {
          ret.add(e);
        }

        for (let j = 0; j < e.length; ++j) {
          const ss = remove(e, j);
          if (!seen.has(ss)) {
            que.push(ss);
            seen.add(ss);
          }
        }
      }
      if (ret.size) {
        return [...ret];
      }
    }
    return [];
  }

  return bfs(s);
};

console.log(removeInvalidParentheses("(a)())()"));
