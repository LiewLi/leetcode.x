#include <gtest/gtest.h>

namespace lc2380 {
class Solution {
   public:
    int secondsToRemoveOccurrences(std::string s) {
        int iter = 0;
        bool loop = true;
        while (loop) {
            loop = false;
            for (size_t i = 0; i < s.size(); ++i) {
                if (i < s.size() - 1 && s[i] == '0' && s[i + 1] == '1') {
                    s[i] = '1';
                    s[i + 1] = '0';
                    ++i;
                    loop = true;
                }
            }
            if (loop) {
                iter += 1;
            }
        }
        return iter;
    }
};

TEST(lc2380, case0) {
    Solution sol;
    ASSERT_EQ(sol.secondsToRemoveOccurrences("0110101"), 4);
    ASSERT_EQ(sol.secondsToRemoveOccurrences("11100"), 0);
}
}  // namespace lc2380