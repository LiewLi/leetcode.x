#include <gtest/gtest.h>
#include <queue>

namespace lc1353 {
class Solution {
   public:
    int maxEvents(std::vector<std::vector<int>>& events) {
        int ret = 0;
        std::sort(events.begin(), events.end());
        int i = 0;
        std::priority_queue<int, std::vector<int>, std::greater<int>> que;
        for (int d = 1; d <= 100000; ++d) {
            while (que.size() && que.top() < d) {
                que.pop();
            }
            while (i < events.size() && events[i][0] == d) {
                que.push(events[i++][1]);
            }
            if (que.size()) {
                que.pop();
                ++ret;
            }
        }
        return ret;
    }
};

TEST(lc1353, case0) {
    Solution sol;
    std::vector<std::vector<int>> events{{1, 2}, {2, 3}, {3, 4}};
    ASSERT_EQ(sol.maxEvents(events), 3);
}
TEST(lc1353, case1) {
    Solution sol;
    std::vector<std::vector<int>> events{
        {1, 5}, {1, 5}, {1, 5}, {2, 3}, {2, 3}};
    ASSERT_EQ(sol.maxEvents(events), 5);
}
}  // namespace lc1353