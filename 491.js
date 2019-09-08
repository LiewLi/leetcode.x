/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {

    let set = new Set()
    let ret = new Array()

    function addIfNotExits(arr) {
        let key = arr.join(',')
        if (!set.has(key)) {
            set.add(key)
            ret.push(arr)
        }
    }

    if (nums.length <= 1) {
        return []
    }
    
    let first = nums[0]
    let rest = nums.slice(1)
    let sub = findSubsequences(rest)

    rest.forEach(a => {
        first <= a && addIfNotExits([first, a])
    })

    sub.forEach(s => {
        addIfNotExits(s)
        first <= s[0] && addIfNotExits([first].concat(s))
    })

    return ret
};

console.log(findSubsequences([4, 6, 7, 7]))