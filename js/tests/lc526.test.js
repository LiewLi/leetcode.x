const countArrangement = require("../lc526");

test("lc526", () => {
  expect(countArrangement(2)).toEqual(2);
  expect(countArrangement(1)).toEqual(1);
  expect(countArrangement(3)).toEqual(3);
});
