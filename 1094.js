/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let stops = new Array(1001).fill(0)
    for (let i = 0; i < trips.length; ++i) {
        let t = trips[i]
        stops[t[1]] += t[0]
        stops[t[2]] -= t[0]
    }
    for (let s of stops) {
        capacity -= s
        if (capacity < 0) return false
    }

    return true
};

console.log(carPooling([[2,1,5],[3,3,7]],5))