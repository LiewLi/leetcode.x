const kthLargestNumber = require("../lc1985");

test("lc1985", () => {
    expect(kthLargestNumber(["3","6","7","10"], 4)).toEqual("3");
    expect(kthLargestNumber(["2","21","12","1"], 3)).toEqual("2");
    expect(kthLargestNumber(["0","0"], 2)).toEqual("0");
})