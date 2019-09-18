/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    function freq(str) {
        const map = new Array(27).fill(0)
        for (let i = 0; i < str.length; ++i) {
            const idx = str.charCodeAt(i) - 'a'.charCodeAt(0)
            map[idx] += 1
        }
        for (const n of map) {
            if ( n > 0) {
                return n
            }
        }
        return 0
    }

    const wordsFreq = words.map((w) => {
        return freq(w)
    }).sort((a, b) => {
        return b - a
    })

    const ret = []
    queries.forEach((q) => {
        const f = freq(q)
        let i = 0
        while (i < wordsFreq.length && f < wordsFreq[i]) i++
        ret.push(i)
    })

    return ret
};