#include <gtest/gtest.h>

namespace lc1154 {
class Solution {
   public:
    bool leap_year(int year) {
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
    int dayOfYear(std::string date) {
        int year, month, day;
        sscanf(date.c_str(), "%4d-%02d-%02d", &year, &month, &day);
        int is_leap_year = leap_year(year);
        int ret = 0;
        for (int i = 1; i < month; ++i) {
            if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 ||
                i == 12) {
                ret += 31;
            } else if (i == 2) {
                ret += is_leap_year ? 29 : 28;
            } else {
                ret += 30;
            }
        }
        return ret + day;
    }
};

TEST(lc1154, case0) {
    Solution sol;
    ASSERT_EQ(sol.dayOfYear("2019-01-09"), 9);
    ASSERT_EQ(sol.dayOfYear("2019-02-10"), 41);
    ASSERT_EQ(sol.dayOfYear("2003-03-01"), 60);
}
}  // namespace lc1154