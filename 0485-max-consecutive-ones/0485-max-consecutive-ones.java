class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = Integer.MIN_VALUE, k = 0;
        for (int n : nums)
            if (n == 1)
                k++;
            else {
                max = Math.max(max, k);
                k = 0;
            }
        return Math.max(max, k);
    }
}