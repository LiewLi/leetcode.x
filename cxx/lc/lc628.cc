#include <gtest/gtest.h>

namespace lc628 {
class Solution {
   public:
    int maximumProduct(std::vector<int>& nums) {
        int ret = 1;
        const int SIZE = nums.size();

        std::sort(nums.begin(), nums.end());

        ret = nums[0] * nums[1] * nums[2];
        for (int i = std::max(3, SIZE - 3); i < SIZE + 3; ++i) {
            ret = std::max(ret, nums[i % SIZE] * nums[(i - 1) % SIZE] *
                                    nums[(i - 2) % SIZE]);
        }
        return ret;
    }
};

TEST(lc628, case0) {
    Solution sol;
    std::vector<int> vec{1, 2, 3, 4};
    ASSERT_EQ(sol.maximumProduct(vec), 24);
}
TEST(lc628, case1) {
    Solution sol;
    std::vector<int> vec{-100, -98, -1, 2, 3, 4};
    ASSERT_EQ(sol.maximumProduct(vec), 39200);
}
}  // namespace lc628