#include <gtest/gtest.h>

namespace lc1003 {
class Solution {
   public:
    bool isValid(std::string s) {
        std::vector<char> stack{};
        stack.reserve(s.size());
        for (size_t i = 0; i < s.size(); ++i) {
            stack.push_back(s[i]);
            if (s[i] == 'c') {
                size_t top = stack.size() - 1;
                if (top >= 2 && stack[top - 1] == 'b' &&
                    stack[top - 2] == 'a') {
                    stack.pop_back();
                    stack.pop_back();
                    stack.pop_back();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }
};

TEST(lc1003, case0) {
    Solution sol;
    ASSERT_TRUE(sol.isValid("aabcbc"));
    ASSERT_TRUE(sol.isValid("abcabcababcc"));
    ASSERT_FALSE(sol.isValid("abccba"));
}
}  // namespace lc1003