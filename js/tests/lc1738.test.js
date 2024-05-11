const kthLargestValue = require("../lc1738");

test("lc1738", () => {
    expect(kthLargestValue([[5,2],[1,6]],1)).toEqual(7);
    expect(kthLargestValue([[8,10,5,8,5,7,6,0,1,4,10,6,4,3,6,8,7,9,4,2]], 2)).toEqual(14);
});