#include <gtest/gtest.h>

namespace lc1423 {
class Solution {
   public:
    int replace(std::vector<int>& nums, int d, int n) {
        if (nums.size() <= 0)
            return 0;
        int ret = 0;
        for (int i = nums.size() - 1; i >= 0; --i) {
            ret = 10 * ret + (nums[i] == d ? n : nums[i]);
        }
        return ret;
    }

    int first_not_n(std::vector<int>& nums, int n) {
        int d = n;
        for (int i = nums.size() - 1; i >= 0; --i) {
            if (nums[i] == d)
                continue;
            d = nums[i];
            break;
        }
        return d;
    }

    bool first_not_zero_n(std::vector<int>& nums, int& n, int& m) {
        if (nums[nums.size() - 1] != 1) {
            n = nums[nums.size() - 1];
            m = 1;
            return true;
        }

        for (int i = nums.size() - 1; i >= 0; --i) {
            if (nums[i] <= 1)
                continue;
            n = nums[i];
            m = 0;
            return true;
        }
        return false;
    }

    int maxDiff(int num) {
        if (num <= 0)
            return 0;
        std::vector<int> digits{};
        int d = num;
        while (d) {
            digits.push_back(d % 10);
            d /= 10;
        }
        int max_n = replace(digits, first_not_n(digits, 9), 9);
        int n = 0;
        int m = 0;
        if (first_not_zero_n(digits, n, m)) {
            return max_n - replace(digits, n, m);
        }
        return max_n - num;
    }
};

TEST(lc1432, case0) {
    Solution sol;
    ASSERT_EQ(sol.maxDiff(555), 888);
    ASSERT_EQ(sol.maxDiff(123456), 820000);
    ASSERT_EQ(sol.maxDiff(9288), 8700);
    ASSERT_EQ(sol.maxDiff(1101057), 8808050);
    ASSERT_EQ(sol.maxDiff(10000), 80000);
}
}  // namespace lc1423