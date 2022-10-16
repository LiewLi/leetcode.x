/**
 * @param {number} size
 */
var Bitset = function(size) {
  this.size = size;
  const n = Math.floor((size + 31) / 32);
  this.bits = new Array(n).fill(0);
  this.cnt = 0;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
  if (idx >= 0 && idx < this.size) {
    const n = Math.floor(idx / 32);
    const m = idx % 32;
    if (this.bits[n] & (1 << (31 - m))) return;
    this.bits[n] |= 1 << (31 - m);
    this.cnt += 1;
  }
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
  if (idx >= 0 && idx < this.size) {
    const n = Math.floor(idx / 32);
    const m = idx % 32;
    if (this.bits[n] & (1 << (31 - m))) {
      this.bits[n] &= ~(1 << (31 - m));
      this.cnt -= 1;
    }
  }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
  this.bits = this.bits.map(a => ~a);
  this.cnt = this.size - this.cnt;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
  return this.cnt >= this.size;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
  return this.cnt > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
  return this.cnt;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
  let s = "";
  for (let idx = 0; idx < this.size; ++idx) {
    const n = Math.floor(idx / 32);
    const m = idx % 32;
    if (this.bits[n] & (1 << (31 - m))) {
      s += "1";
    } else {
      s += "0";
    }
  }
  return s;
};

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

module.exports = Bitset;
