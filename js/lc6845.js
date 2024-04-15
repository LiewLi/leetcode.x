/**
 * @param {number} n
 */
var SeatManager = function(n) {
  this.que = Array(n + 1).fill(0);
  this.maxReversed = 0;
  this.idx = 1;
  this.unreserved = 0;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  if (this.unreserved == 0) {
    this.maxReversed++;
    this.que[this.maxReversed] = 1;
    return this.maxReversed;
  }
  while (this.que[this.idx]) {
    this.idx++;
  }
  this.unreserved--;
  this.que[this.idx] = 1;
  return this.idx;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  this.que[seatNumber] = 0;
  this.unreserved++;
  this.idx = Math.min(seatNumber, this.idx);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
