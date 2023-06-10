#include <gtest/gtest.h>
#include <numeric>

namespace lc1447 {
    class Solution {
public:
    std::vector<std::string> simplifiedFractions(int n) {
        if (n <= 1) {
            return {};
        }
        auto ret = simplifiedFractions(n-1);
        for (int i = 1; i < n; ++i) {
            if (std::gcd(i, n) > 1) continue;
            char buf[100];
            snprintf(buf, 100, "%d/%d", i, n);
            std::string str = buf;
            ret.emplace_back(str);
        }
        return ret;
    }
};

TEST(lc1447, case0) {
    Solution sol;
    std::vector<std::string> ret {"1/2", "1/3", "2/3", "1/4", "3/4"};
    ASSERT_EQ(sol.simplifiedFractions(4), ret);
}
}
