/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.capacity = k;
  this.head = -1;
  this.rear = -1;
  this.arr = new Array(k);
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.arr[(this.head = this.rear = 0)] = value;
  } else {
    this.head = (--this.head + this.capacity) % this.capacity;
    this.arr[this.head] = value;
  }
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.arr[(this.rear = this.head = 0)] = value;
  } else {
    this.rear++;
    this.rear %= this.capacity;
    this.arr[this.rear] = value;
  }
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false;
  if (this.rear == this.head) {
    this.rear = this.head = -1;
  } else {
    this.head++;
    this.head %= this.capacity;
  }
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false;
  if (this.rear == this.head) {
    this.rear = this.head = -1;
  } else {
    this.rear = (--this.rear + this.capacity) % this.capacity;
  }
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) return -1;
  return this.arr[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) return -1;
  return this.arr[this.rear];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.rear == -1 && this.head == -1;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return (this.rear - this.head + 1 + this.capacity) % this.capacity === 0;
};

// const log = console.log
// let circularDeque = new MyCircularDeque(3); // set the size to be 3
// log(circularDeque.insertLast(1));			// return true
// log(circularDeque.insertLast(2));			// return true
// log(circularDeque.insertFront(3));			// return true
// log(circularDeque.insertFront(4));			// return false, the queue is full
// log(circularDeque.getRear());  			// return 2
// log(circularDeque.isFull());				// return true
// log(circularDeque.deleteLast());			// return true
// log(circularDeque.insertFront(4));			// return true
// log(circularDeque.getFront());			// return 4
