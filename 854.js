/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
    if (A === B) return 0
    const vis = new Set([A])
    const q = [A]
    let level = 0
    while (q.length > 0) {
        level++
        for (let i = q.length - 1; i >= 0; --i) {
            const sa = q.shift()
            let k = 0;
            while (sa[k] == B[k] && k < B.length) k++;
            for (let j = k; j < sa.length; ++j) {
                if (sa[j] == B[j] || sa[j] != B[k]) continue
                const tmp = sa.substr(0, k) + sa[j] +
                        sa.substr(k+1, j-k-1) +
                        sa[k] + sa.substr(j+1)
                if (B == tmp) return level
                if (!vis.has(tmp)) {
                    vis.add(tmp)
                    q.push(tmp)
                }
            }
        }
    }
    return level
};

console.log(kSimilarity('abccab', 'abccab'))