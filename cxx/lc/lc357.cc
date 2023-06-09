#include <gtest/gtest.h>

namespace lc357 {
class Solution {
   public:
    int permute(int n) {
        if (n <= 1) {
            return 10;
        }
        int ret = 9;
        int v = 9;
        for (int i = 1; i < n; ++i) {
            ret *= v;
            --v;
        }
        return ret;
    }
    int countNumbersWithUniqueDigits(int n) {
        if (n <= 0) {
            return 1;
        }

        int ret = 0;
        for (int i = n; i > 0; --i) {
            ret += permute(i);
        }
        return ret;
    }
};

TEST(lc357, case0) {
    Solution sol;
    ASSERT_EQ(sol.countNumbersWithUniqueDigits(2), 91);
}
}  // namespace lc357