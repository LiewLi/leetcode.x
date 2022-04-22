const canReach = require("./lc1306");

test("lc1306", () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toEqual(true);
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toEqual(true);
  expect(canReach([3, 0, 2, 1, 2], 2)).toEqual(false);
});
