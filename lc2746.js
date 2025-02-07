/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function(words) {
    if (words.length <= 1) return words[0].length;
    const dp = new Array(words.length);
    for (let k = 0; k < dp.length; ++k) {
        dp[k] = new Array(26);
        for (let i = 0; i < 26; ++i) {
            dp[k][i] = new Array(26).fill(-1);
        }
    }
    const _ch = (ch) => ch.charCodeAt(0) - "a".charCodeAt(0);
    const _min = (a, b) => a < 0 ? b : Math.min(a, b);
    const first = words[0];
    dp[0][_ch(first[0])][_ch(first[first.length-1])] = first.length;
    let res = -1;
    for (let k = 1; k < words.length; ++k) {
        const word = words[k];
        const first = _ch(word[0]);
        const last = _ch(word[word.length-1]);
        for (let i = 0; i < 26; ++i) {
            for (let j = 0; j < 26; ++j) {
                for (let t = 0; t < 26; ++t) {
                    if (dp[k-1][i][t] >= 0 && j == last) {
                        dp[k][i][j] = _min(dp[k][i][j], dp[k-1][i][t] + word.length - (t == first ? 1 : 0));
                    }
                    if (dp[k-1][t][j] >= 0 && i == first) {
                        dp[k][i][j] = _min(dp[k][i][j], word.length - (t == last ? 1 : 0) + dp[k-1][t][j]);
                    }
                }

                if (k == words.length-1 && dp[k][i][j] >= 0) {
                    res = _min(res, dp[k][i][j])
                }
            }
        }
    }
     return res;
};

module.exports