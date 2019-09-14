/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0
    let mask = 0

    for (let i = 31; i >= 0; --i) {
        mask = mask | (1 << i)
        const set = new Set()
        for (const n of nums) {
            set.add(n & mask)
        }
        const tmp = max | (1 << i)
        for (const prefix of set) {
            if (set.has(tmp ^ prefix)) {
                max = tmp
                break
            }
        }
    }
    return max
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))

