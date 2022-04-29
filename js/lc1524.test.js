const numOfSubarrays = require("./lc1524");

test("lc1524", () => {
  expect(numOfSubarrays([1, 3, 5])).toEqual(4);
  expect(numOfSubarrays([2, 4, 6])).toEqual(0);
  expect(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])).toEqual(16);
});
