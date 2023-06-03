#include <gtest/gtest.h>
#include <unordered_map>

namespace lc205 {
class Solution {
   public:
    bool isIsomorphic(std::string s, std::string t) {
        if (s.size() != t.size()) {
            return false;
        }
        std::unordered_map<char, char> map{};
        std::unordered_map<char, char> reverse_map{};
        for (size_t i = 0; i < s.size(); ++i) {
            if (map.find(s[i]) != map.end()) {
                if (map[s[i]] != t[i]) {
                    return false;
                }
            } else {
                if (reverse_map.find(t[i]) != reverse_map.end()) {
                    if (reverse_map[t[i]] != s[i]) {
                        return false;
                    }
                } else {
                    map[s[i]] = t[i];
                    reverse_map[t[i]] = s[i];
                }
            }
        }
        return true;
    }
};

TEST(lc205, case0) {
    Solution sol;
    ASSERT_TRUE(sol.isIsomorphic("egg", "add"));
    ASSERT_FALSE(sol.isIsomorphic("foo", "bar"));
    ASSERT_FALSE(sol.isIsomorphic("bbbaaaba", "aaabbbba"));
    ASSERT_FALSE(sol.isIsomorphic("badc", "baba"));
    ASSERT_TRUE(sol.isIsomorphic("paper", "title"));
}
};  // namespace lc205