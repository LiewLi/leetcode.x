#include <gtest/gtest.h>

namespace lc345 {
class Solution {
   public:
    static bool isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
               (c >= 'A' && c <= 'Z' && isVowel(c - 'A' + 'a'));
    }
    std::string reverseVowels(std::string s) {
        int si = 0;
        int ei = s.size() - 1;
        while (si < ei) {
            while (si < s.size() && !isVowel(s[si]))
                ++si;
            while (ei >= 0 && !isVowel(s[ei]))
                --ei;
            if (si < ei)
                std::swap(s[si++], s[ei--]);
        }
        return s;
    }
};

TEST(lc345, case0) {
    Solution sol;
    ASSERT_EQ(sol.reverseVowels("hello"), "holle");
}
}  // namespace lc345