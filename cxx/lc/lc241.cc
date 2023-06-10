#include <gtest/gtest.h>
#include <cctype>

namespace lc241 {
class Solution {
   public:
    std::vector<int> diffWaysToCompute(std::string expression) {
        std::vector<int> ret{};
        bool isNum = true;
        for (size_t i = 0; i < expression.size(); ++i) {
            if (!std::isdigit(expression[i])) {
                isNum = false;
                std::vector<int> left =
                    diffWaysToCompute(expression.substr(0, i));
                std::vector<int> right =
                    diffWaysToCompute(expression.substr(i + 1));
                for (auto lhs : left) {
                    for (auto rhs : right) {
                        if (expression[i] == '+') {
                            ret.push_back(lhs + rhs);
                        } else if (expression[i] == '*') {
                            ret.push_back(lhs * rhs);
                        } else if (expression[i] == '-') {
                            ret.push_back(lhs - rhs);
                        }
                    }
                }
            }
        }
        if (isNum)
            ret.push_back(std::stoi(expression));
        return ret;
    }
};

TEST(lc241, case0) {
    Solution sol;
    std::vector<int> ret{-34, -10, -14, -10, 10};
    ASSERT_EQ(sol.diffWaysToCompute("2*3-4*5"), ret);
}

TEST(lc241, case1) {
    Solution sol;
    std::vector<int> ret{11};
    ASSERT_EQ(sol.diffWaysToCompute("11"), ret);
}

}  // namespace lc241