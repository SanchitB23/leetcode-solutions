func maxSubArray(nums []int) int {
	sum := 0
    maxi := math.MinInt64
	for _, val := range nums {
		sum += val

        if sum > maxi {
            maxi = sum
        }
        
		if sum < 0 {
			sum = 0
		}
        
	}
	return maxi
}