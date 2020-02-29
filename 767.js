/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const cnt = new Array(26).fill(0);
  for (const ch of S) {
    const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
    cnt[idx] = (cnt[idx] || 0) + 1;
  }

  const que = [];
  for (let i = 0; i < 26; ++i) {
    if (2 * cnt[i] > S.length + 1) return "";
    if (cnt[i]) que.push([String.fromCharCode(i + "a".charCodeAt(0)), cnt[i]]);
  }

  const sort = () => {
    que.sort((p, q) => {
      if (p[1] === q[1]) return p[0].charCodeAt(0) - q[0].charCodeAt(0);
      else return q[1] - p[1];
    });
  };

  let ret = "";

  sort();
  while (que.length >= 2) {
    const p1 = que.shift();
    const p2 = que.shift();
    ret += p1[0];
    ret += p2[0];
    p1[1]--;
    p2[1]--;

    if (p1[1]) que.push(p1);
    if (p2[1]) que.push(p2);
    sort();
  }

  if (que.length) ret += que[0][0];

  return ret;
};

console.log(reorganizeString("aab"));
