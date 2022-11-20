const numMatchingSubseq = require("../lc792");

test("lc792", () => {
  expect(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])).toEqual(3);
  expect(
    numMatchingSubseq("dsahjpjauf", [
      "ahjpjau",
      "ja",
      "ahbwzgqnuk",
      "tnmlanowax"
    ])
  ).toEqual(2);
});
