#include <gtest/gtest.h>

namespace lc258 {
class Solution {
   public:
    int addDigits(int num) {
        if (num == 0)
            return 0;
        else if (num % 9 == 0)
            return 9;
        else
            return num % 9;
    }
};

TEST(lc258, case0) {
    Solution sol;
    ASSERT_EQ(sol.addDigits(38), 2);
}
}  // namespace lc258