const rearrangeArray = require("../lc1968");

function validate(nums) {
    for (let i = 1; i < nums.length - 1; ++i) {
        if (nums[i-1] + nums[i+1] == nums[i] + nums[i]) {
            return false;
        }
    }
    return true;
}

test("lc1968", () => {
    expect(validate(rearrangeArray([1,2,3,4,5]))).toBeTruthy();
    expect(validate(rearrangeArray([1,2,3]))).toBeTruthy();
})