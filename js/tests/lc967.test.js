const numsSameConsecDiff = require("../lc967");

test("lc967", () => {
  expect(numsSameConsecDiff(3, 7)).toEqual([181, 292, 707, 818, 929]);
  expect(numsSameConsecDiff(2, 1)).toEqual([
    10,
    12,
    21,
    23,
    32,
    34,
    43,
    45,
    54,
    56,
    65,
    67,
    76,
    78,
    87,
    89,
    98
  ]);
});
