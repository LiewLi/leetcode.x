const maximumElementAfterDecrementingAndRearranging = require("../lc1846");

test("lc1846", () => {
    expect(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1])).toEqual(2);
    expect(maximumElementAfterDecrementingAndRearranging([100,1,1000])).toEqual(3);
    expect(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5])).toEqual(5);
})