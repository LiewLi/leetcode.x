const maxNumOfMarkedIndices = require("../lc2576");

test("lc2576", () => {
    expect(maxNumOfMarkedIndices([3,5,2,4])).toEqual(2);
    expect(maxNumOfMarkedIndices([9,2,5,4])).toEqual(4);
    expect(maxNumOfMarkedIndices([1,78,27,48,14,86,79,68,77,20,57,21,18,67,5,51,70,85,47,56,22,79,41,8,39,81,59,74,14,45,49,15,10,28,16,77,22,65,8,36,79,94,44,80,72,8,96,78,39,92,69,55,9,44,26,76,40,77,16,69,40,64,12,48,66,7,59,10])).toEqual(64);
});