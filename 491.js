/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const set = new Set()
    const ret = []

    function addIfNotExists(arr) {
        const key = arr.join(',')
        if (!set.has(key)) {
            set.add(key)
            ret.push(arr)
        }
    }

    if (nums.length <= 1) {
        return []
    }

    const first = nums[0]
    const rest = nums.slice(1)
    const sub = findSubsequences(rest)

    rest.forEach((a) => {
        first <= a && addIfNotExists([first, a])
    })

    sub.forEach((s) => {
        addIfNotExists(s)
        first <= s[0] && addIfNotExists([first].concat(s))
    })

    return ret
};

console.log(findSubsequences([4, 6, 7, 7]))