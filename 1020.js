/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    function DSU(N) {
        this.parent = []
        this.rank = []
        for (let i = 0; i < N; ++i) {
            this.parent[i] = i
            this.rank[i] = 0
        }
    }

    DSU.prototype.find = function(u) {
        if (this.parent[u] == u) return u
        return this.parent[u] = this.find(this.parent[u])
    }

    DSU.prototype.union = function(u, v) {
        const uPar = this.find(u)
        const vPar = this.find(v)

        if (uPar == vPar) {
            return
        }

        if (this.rank[uPar] > this.rank[vPar]) {
            this.parent[vPar] = uPar
        } else if (this.rank[uPar] < this.rank[vPar]) {
            this.parent[uPar] = vPar
        } else {
            this.parent[uPar] = vPar
            this.rank[vPar]++
        }
    }

    const N = A.length
    const M = A[0].length
    const dsu = new DSU(N * M)
    const border = []
    const lands = []
    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < M; ++c) {
            const s = r * M + c
            if (A[r][c]) {
                if (c == 0 || c == M - 1 || r == 0 || r == N - 1) {
                    border.push(s)
                } else {
                    lands.push(s)
                }
                if (c > 0 && A[r][c - 1]) {
                    dsu.union(s, s - 1)
                }

                if (c < N - 1 && A[r][c + 1]) {
                    dsu.union(s, s + 1)
                }

                if (r > 0 && A[r - 1][c]) {
                    dsu.union(s, s - M)
                }

                if (r < N - 1 && A[r + 1][c]) {
                    dsu.union(s, s + M)
                }
            }
        }
    }

    const borderRoots = new Set(border.map((e) => dsu.find(e)))
    const landsRoots = lands.map((e) => dsu.find(e))

    return landsRoots.filter((e) => !borderRoots.has(e)).length
};