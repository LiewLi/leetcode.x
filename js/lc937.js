/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const split_log = log => {
    const idx = log.search(/\s/);
    return [log.substring(0, idx), log.substring(idx + 1)];
  };
  const is_digit = log => {
    return (
      log.charCodeAt(0) >= "0".charCodeAt(0) &&
      log.charCodeAt(0) <= "9".charCodeAt(0)
    );
  };

  logs.sort((log1, log2) => {
    const w1 = split_log(log1);
    const w2 = split_log(log2);
    if (is_digit(w1[1]) && is_digit(w2[1])) {
      return 0;
    } else if (!is_digit(w1[1]) && !is_digit(w2[1])) {
      if (w1[1] == w2[1]) {
        return w1[0].localeCompare(w2[0]);
      } else {
        return w1[1].localeCompare(w2[1]);
      }
    } else if (is_digit(w1[1])) {
      return 1;
    } else {
      return -1;
    }
  });

  return logs;
};
module.exports = reorderLogFiles;
