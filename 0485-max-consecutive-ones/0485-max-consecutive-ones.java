class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = Integer.MIN_VALUE, k = 0;
        for (int n : nums) {
            if (n == 1)
                k++;
            else
                k = 0;
            max = Math.max(max, k);
        }
        return max;
    }
}