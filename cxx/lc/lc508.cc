#include <gtest/gtest.h>
#include <queue>
#include <unordered_map>

namespace lc508 {

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right)
        : val(x), left(left), right(right) {}
};

class Solution {
   public:
    using map_t = std::unordered_map<int, int>;

    std::vector<int> findFrequentTreeSum(TreeNode* root) {
        map_t map{};
        int max_freq = 0;
        std::vector<int> ret;
        dfs(root, map, max_freq);
        for (auto& p : map) {
            if (p.second == max_freq) {
                ret.push_back(p.first);
            }
        }
        return ret;
    }

    int dfs(TreeNode* node, map_t& map, int& max_freq) {
        if (!node) {
            return 0;
        }
        int left = dfs(node->left, map, max_freq);
        int right = dfs(node->right, map, max_freq);
        int sum = left + node->val + right;
        auto& val = map[sum];
        ++val;
        if (val > max_freq) {
            max_freq = val;
        }
        return sum;
    }
};

TEST(lc508, case0) {
    TreeNode node0(5);
    TreeNode node1(2);
    TreeNode node2(-5);
    node0.left = &node1;
    node0.right = &node2;

    Solution sol;
    ASSERT_EQ(sol.findFrequentTreeSum(&node0), std::vector<int>{2});
}

}  // namespace lc508