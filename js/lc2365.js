/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
  const map = {};
  let days = 0;
  for (let i = 0; i < tasks.length; ++i) {
    if (tasks[i] in map) {
      const old = map[tasks[i]];
      if (days - old >= space + 1) {
        ++days;
      } else {
        days = space + 1 + old;
      }
    } else {
      ++days;
    }
    map[tasks[i]] = days;
  }
  return days;
};
module.exports = taskSchedulerII;
