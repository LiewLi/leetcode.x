const minGroups = require("../lc2406");

test("lc2406", () => {
    expect(minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]])).toEqual(3);
    expect(minGroups([[1,3],[5,6],[8,10],[11,13]])).toEqual(1);
    expect(minGroups([[441459,446342],[801308,840640],[871890,963447],[228525,336985],[807945,946787],[479815,507766],[693292,944029],[751962,821744]])).toEqual(4);
})