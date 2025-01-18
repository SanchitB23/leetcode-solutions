class Solution {
    public int[] getConcatenation(int[] nums) {
        int len2 = nums.length * 2;
        int[] res = new int[len2];
        for (int i = 0; i < len2; i++)
            res[i] = nums[i % nums.length];
        return res;
    }
}