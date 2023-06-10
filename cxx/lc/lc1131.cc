#include <gtest/gtest.h>

namespace lc1131 {
class Solution {
   public:
    int maxAbsValExpr(std::vector<int>& arr1, std::vector<int>& arr2) {
        int ret = 0;
        for (int p : {-1, 1}) {
            for (int q : {-1, 1}) {
                int min_ = p * arr1[0] + q * arr2[0];
                for (int i = 1; i < arr1.size(); ++i) {
                    int v = p * arr1[i] + q * arr2[i] + i;
                    ret = std::max(ret, v - min_);
                    if (v < min_) {
                        min_ = v;
                    }
                }
            }
        }

        return ret;
    }
};

TEST(lc1131, case0) {
    Solution sol;
    std::vector<int> arr1{1, 2, 3, 4};
    std::vector<int> arr2{-1, 4, 5, 6};
    ASSERT_EQ(sol.maxAbsValExpr(arr1, arr2), 13);
}
}  // namespace lc1131