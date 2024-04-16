const largestWordCount = require("../lc2284");

test("lc2284", () => {
    expect(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"])).toEqual("Alice");
})