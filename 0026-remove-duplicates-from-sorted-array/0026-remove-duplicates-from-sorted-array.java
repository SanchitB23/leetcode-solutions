class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0, j = 0, len = nums.length;
        while (j < len) {
            if (nums[i] != nums[j]) {
                i++;
                nums[i] = nums[j];
            }
            j++;
        }
        return i + 1;
    }
}