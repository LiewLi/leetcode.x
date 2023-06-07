
#include <gtest/gtest.h>

namespace lc1498 {

class Solution {
   public:
    static inline int64_t fast_pow2(int n, int MOD) {
        int64_t v = 1;
        int64_t x = 2;
        while (n > 0) {
            if (n % 2 == 1) {
                v *= x;
                v %= MOD;
            }
            n >>= 1;
            x *= (x % MOD);
            x %= MOD;
        }
        return v;
    }
    int numSubseq(std::vector<int>& nums, int target) {
        int ret = 0;
        const int MOD = 1e9 + 7;
        int s = 0;
        int e = 0;
        std::sort(nums.begin(), nums.end());
        while (s <= e && e < nums.size()) {
            auto it = std::upper_bound(nums.begin() + s, nums.end(),
                                       target - nums[s]);
            e = it - nums.begin() - 1;

            if (s > e || nums[s] + nums[e] > target)
                break;

            ret += fast_pow2(e - s, MOD);
            ret %= MOD;

            ++s;
        }

        return ret;
    }
};

TEST(lc1498, case0) {
    Solution sol;
    std::vector<int> nums{3, 5, 6, 7};
    ASSERT_EQ(sol.numSubseq(nums, 9), 4);
    std::vector<int> nums1{2, 3, 3, 4, 6, 7};
    ASSERT_EQ(sol.numSubseq(nums1, 12), 61);
    std::vector<int> nums2{27, 21, 14, 2,  15, 1,  19, 8,  12, 24, 21, 8,  12,
                           10, 11, 30, 15, 18, 28, 14, 26, 9,  2,  24, 23, 11,
                           7,  12, 9,  17, 30, 9,  28, 2,  14, 22, 19, 19, 27,
                           6,  15, 12, 29, 2,  30, 11, 20, 30, 21, 20, 2,  22,
                           6,  14, 13, 19, 21, 10, 18, 30, 2,  20, 28, 22};
    ASSERT_EQ(sol.numSubseq(nums2, 31), 688052206);
}
}  // namespace lc1498