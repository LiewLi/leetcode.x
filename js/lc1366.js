/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  const rank = {};
  const N = votes[0].length;
  for (const vote of votes) {
    for (let i = 0; i < vote.length; ++i) {
      rank[vote[i]] = rank[vote[i]] || new Array(N).fill(0);
      rank[vote[i]][i]++;
    }
  }
  return votes[0]
    .split("")
    .sort((a, b) => {
      for (let i = 0; i < N; ++i) {
        if (rank[a][i] > rank[b][i]) {
          return -1;
        } else if (rank[a][i] < rank[b][i]) {
          return 1;
        }
      }
      return a == b ? 0 : a > b ? 1 : -1;
    })
    .join("");
};

console.log(rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]));
