/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    const order = new Array(26).fill(27)
    const s = 'a'.charCodeAt(0)
    for (let i = 0; i < S.length; ++i) {
        order[S.charCodeAt(i) - s] = i
    }

    return T.split('').sort((a, b) => {
        return order[a.charCodeAt(0) - s] - order[b.charCodeAt(0) - s]
    }).join('')
};

console.log(customSortString('cba', 'abcd'))