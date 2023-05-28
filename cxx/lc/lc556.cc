#include <gtest/gtest.h>

namespace lc556 {
class Solution {
   public:
    int nextGreaterElement(int n) {
        int digits[32];
        int k = 0;
        while (n) {
            digits[k++] = n % 10;
            n /= 10;
        }

        bool found = false;
        for (int i = 1; i < k; ++i) {
            for (int j = 0; j < i; ++j) {
                if (digits[i] < digits[j]) {
                    found = true;
                    std::swap(digits[i], digits[j]);
                    std::sort(digits, digits + i, std::greater<int>());
                    break;
                }
            }
            if (found)
                break;
        }

        if (!found)
            return -1;

        int64_t ret = 0;
        while (k) {
            ret = ret * 10 + digits[--k];
        }

        const int MAX_INT = ((-1) & (~(1 << 31)));
        if (ret > MAX_INT) {
            return -1;
        }
        return ret;
    }
};

TEST(lc556, case0) {
    Solution sol;
    ASSERT_EQ(sol.nextGreaterElement(12), 21);
    ASSERT_EQ(sol.nextGreaterElement(21), -1);
    ASSERT_EQ(sol.nextGreaterElement(230241), 230412);
    ASSERT_EQ(sol.nextGreaterElement(2147483486), -1);
    ASSERT_EQ(sol.nextGreaterElement(2147483476), 2147483647);
}
}  // namespace lc556