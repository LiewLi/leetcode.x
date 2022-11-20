const minimumTime = require("../lc2187");

test("lc2187", () => {
  expect(minimumTime([1, 2, 3], 5)).toEqual(3);
  expect(minimumTime([2], 1)).toEqual(2);
  expect(minimumTime([5, 10, 10], 9)).toEqual(25);
  expect(minimumTime([10000], 10000000)).toEqual(100000000000);
});
