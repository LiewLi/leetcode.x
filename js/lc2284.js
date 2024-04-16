/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  const map = {};
  let maxSender;
  let maxCnt = 0;
  for (let i = 0; i < senders.length; ++i) {
    if (!(senders[i] in map)) {
      map[senders[i]] = 0;
    }
    map[senders[i]] += messages[i].split(" ").length;
    const currentCnt = map[senders[i]];
    if (
      currentCnt > maxCnt ||
      (currentCnt == maxCnt && senders[i] > maxSender)
    ) {
      maxCnt = currentCnt;
      maxSender = senders[i];
    }
  }
  return maxSender;
};

module.exports = largestWordCount;
