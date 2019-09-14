var canVisitAllRooms = function(room) {
    const visited = []
    const reacheable = [0]
    while (reacheable.length > 0) {
        const u = reacheable.shift()
        if (visited.indexOf(u) < 0) {
            visited.push(u)
            room[u].forEach((element) => {
                reacheable.push(element)
            });
        }
    }

    return visited.length == room.length
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))