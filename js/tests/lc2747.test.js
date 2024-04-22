const countServers = require("../lc2747");

test("lc2747", () => {
    expect(countServers(3, [[1,3],[2,6],[1,5]], 5, [10,11])).toEqual([1,2]);
    expect(countServers(3, [[1,35],[1,32],[1,11],[1,39],[2,29]], 8, [38,30,23,33,15,31,34,22,11,14])).toEqual([2,2,3,1,2,2,1,3,2,2]);
})