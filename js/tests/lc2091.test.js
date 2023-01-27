const minimumDeletions = require('../lc2091');

test("lc2091", () => {
    expect(minimumDeletions([2,10,7,5,4,1,8,6])).toEqual(5);
    expect(minimumDeletions([0,-4,19,1,8,-2,-3,5])).toEqual(3);
    expect(minimumDeletions([101])).toEqual(1);
})