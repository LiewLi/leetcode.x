const scoreOfParentheses = require("../lc856");

test("lc856", () => {
  expect(scoreOfParentheses("()")).toEqual(1);
});

test("lc856", () => {
  expect(scoreOfParentheses("(())")).toEqual(2);
});

test("lc856", () => {
  expect(scoreOfParentheses("()()")).toEqual(2);
});
