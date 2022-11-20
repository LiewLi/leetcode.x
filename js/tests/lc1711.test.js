const countPairs = require("../lc1711");

test("lc1711", () => {
  expect(countPairs([1, 3, 5, 7, 9])).toBe(4);
});

test("lc1711", () => {
  expect(countPairs([1, 1, 1, 3, 3, 3, 7])).toBe(15);
});
