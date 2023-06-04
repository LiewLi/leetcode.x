#include <gtest/gtest.h>

namespace lc1577 {
class Solution {
   public:
    std::vector<int> findSmallestSetOfVertices(
        int n,
        std::vector<std::vector<int>>& edges) {
        std::vector<int> edge_vec(n, 0);
        for (auto& edge : edges) {
            edge_vec[edge[1]] += 1;
        }
        std::vector<int> ret{};
        for (size_t i = 0; i < n; ++i) {
            if (edge_vec[i] == 0) {
                ret.push_back(i);
            }
        }
        return ret;
    }
};

TEST(lc1557, case0) {
    std::vector<std::vector<int>> edges{{0, 1}, {0, 2}, {2, 5}, {3, 4}, {4, 2}};
    Solution sol;
    std::vector<int> result{0, 3};
    ASSERT_EQ(sol.findSmallestSetOfVertices(6, edges), result);
}
}  // namespace lc1577