/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

function Heap(cmp) {
  this._heap = [];
  if (typeof cmp === "function") {
    this._cmp = cmp;
  } else {
    this._cmp = function(a, b) {
      return a - b;
    };
  }
}

Heap.prototype._heapify = function(idx) {
  let exc = idx;
  const leftIdx = 2 * idx + 1;
  const rightIdx = 2 * idx + 2;

  if (
    leftIdx < this._heap.length &&
    this._cmp(this._heap[leftIdx], this._heap[idx]) > 0
  ) {
    exc = leftIdx;
  }

  if (
    rightIdx < this._heap.length &&
    this._cmp(this._heap[rightIdx], this._heap[idx]) > 0 &&
    this._cmp(this._heap[rightIdx], this._heap[leftIdx]) > 0
  ) {
    exc = rightIdx;
  }

  if (idx !== exc) {
    const tmp = this._heap[exc];
    this._heap[exc] = this._heap[idx];
    this._heap[idx] = tmp;
    this._heapify(exc);
  }
};

Heap.prototype._update = function(idx, val) {
  this._heap[idx] = val;
  let parent = Math.floor((idx - 1) / 2);
  while (parent >= 0 && this._cmp(this._heap[idx], this._heap[parent]) > 0) {
    var tmp = this._heap[parent];
    this._heap[parent] = this._heap[idx];
    this._heap[idx] = tmp;
    idx = parent;
    parent = Math.floor((parent - 1) / 2);
  }

  this._heapify(idx);
};

Heap.prototype.add = function(val) {
  this._heap.push(val);
  this._update(this._heap.length - 1, val);
};

Heap.prototype.top = function() {
  return this._heap[0];
};

Heap.prototype.poll = function() {
  if (this._heap.length <= 1) {
    return this._heap.pop();
  }
  const t = this.top();
  this._heap[0] = this._heap.pop();
  this._heapify(0);
  return t;
};

Heap.prototype.size = function() {
  return this._heap.length;
};

Heap.prototype.remove = function(val) {
  const size = this.size();
  if (size <= 0) return;
  const idx = this._heap.findIndex(a => this._cmp(a, val) === 0);
  if (idx == size - 1) {
    this._heap.pop();
  } else if (idx >= 0) {
    this._update(idx, this._heap.pop());
  }
};

var kSmallestPairs = function(nums1, nums2, k) {
  const ret = [];
  const cmp = (a, b) => a[0] + a[1] - b[0] - b[1];
  const maxHeap = new Heap(cmp);
  for (let i = 0; i < nums1.length; ++i) {
    for (let j = 0; j < nums2.length; ++j) {
      if (maxHeap.size() < k) {
        maxHeap.add([nums1[i], nums2[j]]);
      } else if (cmp([nums1[i], nums2[j]], maxHeap.top()) < 0) {
        maxHeap.add([nums1[i], nums2[j]]);
        maxHeap.poll();
      } else {
        break;
      }
    }
  }

  while (maxHeap.size()) {
    ret.unshift(maxHeap.poll());
  }
  return ret;
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
