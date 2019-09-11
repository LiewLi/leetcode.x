/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
    let set = new Set()

    let p = new Set()
    
    for (let a of A) {
        let s = new Set()
        s.add(a)
        for (let r of p) {
            s.add(a | r)
        }
        p = s
        for (let r of p) {
            set.add(r)
        }
    }

    return set.size
};

console.log(subarrayBitwiseORs([1, 1, 2]))