/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
    const set = new Set()
    const p = new Set()
    for (const a of A) {
        const s = new Set()
        s.add(a)
        for (const r of p) {
            s.add(a | r)
        }
        p = s
        for (const r of p) {
            set.add(r)
        }
    }

    return set.size
};

console.log(subarrayBitwiseORs([1, 1, 2]))