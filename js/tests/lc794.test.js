const validTicTacToe = require("../lc794");

test("lc794", () => {
    expect(validTicTacToe(["XOX"," X ","   "])).toEqual(false);
    expect(validTicTacToe(["XOX","O O","XOX"])).toEqual(true);
    expect(validTicTacToe(["XXX","XOO","OO "])).toEqual(false);
})