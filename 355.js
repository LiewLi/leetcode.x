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

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.seq = 0;
  this.net = {};
  this.tweets = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets[userId] = this.tweets[userId] || [];
  this.tweets[userId].unshift({ tweetId, seq: this.seq++ });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const cmp = (a, b) => b.seq - a.seq;
  const minHeap = new Heap(cmp);
  const users = [userId].concat(this.net[userId] || []);
  const K = 10;
  for (const u of users) {
    const tweets = this.tweets[u];
    if (!tweets) continue;
    for (let i = 0; i < Math.min(K, tweets.length); i++) {
      const t = tweets[i];
      if (minHeap.size() < K) {
        minHeap.add(t);
      } else if (minHeap.top().seq > t.seq) {
        break;
      } else {
        minHeap.add(t);
        minHeap.poll();
      }
    }
  }

  const ret = [];
  while (minHeap.size()) {
    ret.unshift(minHeap.poll().tweetId);
  }

  return ret;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId === followeeId) return;
  this.net[followerId] = this.net[followerId] || [];
  if (!this.net[followerId].includes(followeeId)) {
    this.net[followerId].push(followeeId);
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.net[followerId] = this.net[followerId] || [];
  const idx = this.net[followerId].indexOf(followeeId);
  if (idx >= 0) {
    this.net[followerId].splice(idx, 1);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
