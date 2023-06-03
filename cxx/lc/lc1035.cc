#include <gtest/gtest.h>

namespace lc1035 {
class Solution {
   public:
    int maxUncrossedLines(std::vector<int>& nums1, std::vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return maxUncrossedLines(nums2, nums1);
        }

        std::vector<int> dp(nums2.size() + 1, 0);
        for (int i = 1; i <= nums1.size(); ++i) {
            int prev = 0;
            for (int j = 1; j <= nums2.size(); ++j) {
                int cur = dp[j];
                if (nums1[i - 1] == nums2[j - 1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = std::max(dp[j], dp[j - 1]);
                }
                prev = cur;
            }
        }

        return dp[nums2.size()];
    }
};

TEST(lc1035, case0) {
    Solution sol;
    std::vector<int> vec1{2, 5, 1, 2, 5};
    std::vector<int> vec2{10, 5, 2, 1, 5, 2};
    ASSERT_EQ(sol.maxUncrossedLines(vec1, vec2), 3);
}
}  // namespace lc1035