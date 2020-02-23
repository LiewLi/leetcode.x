/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const stack = [];
  const ret = [];
  for (const log of logs) {
    const [id, func, ts] = log.split(":");
    if (func === "start") {
      if (stack.length) {
        const s = stack[stack.length - 1];
        s[2] += +ts - s[1];
      }
      stack.push([+id, +ts, 0]);
    } else if (func === "end") {
      const s = stack.pop();
      ret[s[0]] = (ret[s[0]] || 0) + s[2] + +ts - s[1] + 1;
      if (stack.length) {
        stack[stack.length - 1][1] = +ts + 1;
      }
    }
  }

  return ret;
};

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
