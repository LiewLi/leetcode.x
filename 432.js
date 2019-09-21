function LinkedList() {
    this.head = null
    this.tail = null
}

LinkedList.prototype.insertAfter = function(node, nextNode) {
    if (!node || !nextNode) return
    const q = node.next
    nextNode.prev = node
    nextNode.next = q
    node.next = nextNode
    if (q) q.prev = nextNode
    if (node == this.tail) {
        this.tail = nextNode
    }
}

LinkedList.prototype.insertBefore = function(node, prevNode) {
    if (!node || !prevNode) return
    const p = node.prev
    if (p) p.next = prevNode
    prevNode.prev = p
    prevNode.next = node
    node.prev = prevNode

    if (node == this.head) {
        this.head = prevNode
    }
}

LinkedList.prototype.remove = function(node) {
    if (!node) return
    const p = node.prev
    const q = node.next
    if (p) p.next = q
    if (q) q.prev = p
    if (node == this.head) {
        this.head = q
    }
    if (node == this.tail) {
        this.tail = p
    }
}

LinkedList.prototype.insertHead = function(node) {
    if (!this.head) {
        this.head = node
    } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    if (!this.tail) {
        this.tail = node
    }
}

LinkedList.prototype.print = function() {
    let p = this.head
    while (p) {
        let chain = ''
        for (const v of p.val.set.values()) {
            chain += '-' + v
        }
        console.log(`${p.val.val}:${chain}}`)
        p = p.next
    }
}

function Node(val) {
    this.prev = null
    this.next = null
    this.val = val
}


function Bucket(val) {
    this.val = val
    this.set = new Set()
}

/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.map = {}
    this.chain = new LinkedList()
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (this.map[key]) {
        const node = this.map[key]
        if (!node.next || node.next.val.val > node.val.val + 1) {
            const bucket = new Bucket(node.val.val + 1)
            bucket.set.add(key)
            const newNode = new Node(bucket)
            this.chain.insertAfter(node, newNode)
            this.map[key] = newNode
        } else {
            node.next.val.set.add(key)
            this.map[key] = node.next
        }
        node.val.set.delete(key)
        if (node.val.set.size <= 0) this.chain.remove(node)
    } else {
        if (this.chain.head && this.chain.head.val.val == 1) {
            this.chain.head.val.set.add(key)
        } else {
            const bucket = new Bucket(1)
            bucket.set.add(key)
            const newNode = new Node(bucket)
            this.chain.insertHead(newNode)
        }

        this.map[key] = this.chain.head
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1
 * remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    const node = this.map[key]
    if (!node) return

    if (node.val.val > 1) {
        const prev = node.prev
        if (!prev || prev.val.val < node.val.val - 1) {
            const bucket = new Bucket(node.val.val - 1)
            bucket.set.add(key)
            const newNode = new Node(bucket)
            this.chain.insertBefore(node, newNode)
            this.map[key] = newNode
        } else {
            prev.val.set.add(key)
            this.map[key] = prev
        }
    } else {
        delete this.map[key]
    }

    node.val.set.delete(key)
    if (node.val.set.size <= 0) {
        this.chain.remove(node)
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if (this.chain.tail) {
        for (const v of this.chain.tail.val.set.values()) return v
    }
    return ''
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if (this.chain.head) {
        for (const v of this.chain.head.val.set.values()) return v
    }
    return ''
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

function debug() {
    console.log(obj.map)
    console.log(obj.chain)
    obj.chain.print()
}

var obj = new AllOne()
obj.inc('a')
obj.inc('b')
obj.inc('b')
obj.inc('b')
obj.inc('b')
obj.dec('b')
obj.dec('b')
debug()
console.log(obj.getMaxKey())
console.log(obj.getMinKey())
