/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snap_id = 0
    this.snapshot = new Array(length)
    for (let i = 0; i < length; ++i) {
        this.snapshot[i] = new Map([[0, 0]])
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.snapshot[index].set(this.snap_id, val)
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snap_id++
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snapId) {
    const snap = this.snapshot[index]

    for (let i = snapId; i >= 0; --i) {
        if (snap.has(i)) {
            return snap.get(i)
        }
    }

    return 0
};
