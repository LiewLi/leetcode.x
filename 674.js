/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length
    }
    var maxL = 1
    var max_so_far = 1
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > nums[i-1]) {
            ++max_so_far
        } else {
            max_so_far = 1
        }
        maxL = Math.max(maxL, max_so_far)
    }

    return maxL
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))