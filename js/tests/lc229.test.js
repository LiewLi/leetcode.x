const majorityElement = require("../lc229");

test("lc229", () => {
  expect(majorityElement([3, 2, 3])).toEqual([3]);
  expect(majorityElement([1])).toEqual([1]);
  expect(majorityElement([1, 2])).toEqual([1, 2]);
});
