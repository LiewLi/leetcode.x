#include <gtest/gtest.h>
#include <vector>
#include <unordered_map>

namespace lc1636 {

class Solution {
public:
    std::vector<int> frequencySort(std::vector<int>& nums) {
        std::unordered_map<int, size_t> freq_map{};
        using _pair = std::pair<int, size_t>;
        std::vector<_pair> pairs{};

        for (auto n : nums) {
            if (freq_map.find(n) == freq_map.end()) {
                pairs.emplace_back(n, 1);
                freq_map[n] = pairs.size() - 1;
            } else {
                pairs[freq_map[n]].second += 1;
            }
        }
        
        std::sort(pairs.begin(), pairs.end(), [](_pair& p, _pair& q) {
            if (p.second == q.second) {
                return q.first <= p.first;
            }
            return p.second <= q.second;
        });

        std::vector<int> ret{};
        ret.reserve(nums.size());
        for (auto& p : pairs) {
            for (size_t i = 0; i < p.second; ++i) {
                ret.push_back(p.first);
            }
        }

        return ret;
    }
};

TEST(lc1636, case0)
{
    Solution sol;
    std::vector<int> vec{1,1,2,2,2,3};
    std::vector<int> expected{3,1,1,2,2,2};
    EXPECT_EQ(sol.frequencySort(vec), expected);
}

}