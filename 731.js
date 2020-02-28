var MyCalendarTwo = function() {
  this.calendar = [];
  this.overlap = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  for (const over of this.overlap) {
    if (start < over[1] && end > over[0]) return false;
  }
  for (const cal of this.calendar) {
    if (start < cal[1] && end > cal[0]) {
      this.overlap.push([Math.max(cal[0], start), Math.min(cal[1], end)]);
    }
  }

  this.calendar.push([start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
