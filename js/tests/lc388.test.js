const lengthLongestPath = require("../lc388");

test("lc388", () => {
    expect(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext")).toEqual(20);
    expect(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")).toEqual(32);
})