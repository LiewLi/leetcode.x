const rob = require("../lc213");

test("lc213", () => {
    expect(rob([2,3,2])).toEqual(3);
    expect(rob([1,2,3,1])).toEqual(4);
    expect(rob([1,2,3])).toEqual(3);
    expect(rob([1,3,1,3,100])).toEqual(103);
    expect(rob([1,2,3,4,5,1,2,3,4,5])).toEqual(16);
})