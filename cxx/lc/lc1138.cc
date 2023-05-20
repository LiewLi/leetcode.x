#include <gtest/gtest.h>

namespace lc1138 {
class Solution {
   public:
    std::string alphabetBoardPath(std::string target) {
        // a b c d e
        // f g h i j
        // k l m n o
        // p q r s t
        // u v w x y
        // z
        std::string edges[26][26];
        for (int i = 0; i < 26; ++i) {
            int row = i / 5;
            int col = i % 5;
            for (int j = 0; j < 26; ++j) {
                int r = j / 5;
                int c = j % 5;

                int dy = r - row;
                int dx = c - col;
                std::string path{};
                if (i != 25 && j == 25) {  //'z'
                    path += edges[i]['u' - 'a'] + "D";
                } else {
                    for (int k = 0; k < abs(dy); ++k) {
                        path += dy > 0 ? "D" : "U";
                    }
                    for (int k = 0; k < abs(dx); ++k) {
                        path += dx > 0 ? "R" : "L";
                    }
                }
                edges[i][j] = path;
            }
        }

        std::string ret{};
        char start = 'a';
        for (size_t i = 0; i < target.size(); ++i) {
            ret += edges[start - 'a'][target[i] - 'a'] + "!";
            start = target[i];
        }

        return ret;
    }
};

TEST(lc1138, case0) {
    Solution sol;
    ASSERT_EQ(sol.alphabetBoardPath("leet"), "DDR!UURRR!!DDD!");
}
}  // namespace lc1138