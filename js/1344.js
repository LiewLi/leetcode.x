/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  hour %= 12;
  const hourAngel = (hour * 360) / 12.0 + (30 * minutes) / 60;
  const minuteAngel = (360 * minutes) / 60;

  const delta = Math.abs(hourAngel - minuteAngel);
  return delta <= 180 ? delta : 360 - delta;
};

console.log(angleClock(12, 30));
