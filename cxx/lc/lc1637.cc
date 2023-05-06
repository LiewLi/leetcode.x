
#include <gtest/gtest.h>
#include <vector>

namespace lc1637 {
class Solution {
public:
  int maxWidthOfVerticalArea(std::vector<std::vector<int>> &points) {
    std::sort(
        points.begin(), points.end(),
        [](std::vector<int> &p, std::vector<int> &q) { return p[0] <= q[0]; });
    int max_width = 0;
    for (size_t i = 1; i < points.size(); ++i) {
      max_width = std::max(max_width, points[i][0] - points[i - 1][0]);
    }
    return max_width;
  }
};

TEST(lc1637, case0) {
  Solution sol;
  std::vector<std::vector<int>> vec{{8, 7}, {9, 9}, {7, 4}, {9, 7}};
  EXPECT_EQ(sol.maxWidthOfVerticalArea(vec), 1);
}
} // namespace lc1637