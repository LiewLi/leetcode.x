const isPerfectSquare = require("../lc367")

test("lc367", () => {
    expect(isPerfectSquare(16)).toEqual(true);
    expect(isPerfectSquare(14)).toEqual(false);
})