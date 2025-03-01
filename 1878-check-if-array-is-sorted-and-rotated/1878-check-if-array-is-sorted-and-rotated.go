func check(nums []int) bool {
	isRotated := false
	for i := 1; i < len(nums); i++ {
		if nums[i-1] > nums[i] {
			if isRotated {
				return false
			}
			isRotated = true
		}
	}
	first, last := nums[0], nums[len(nums)-1]
	if isRotated && first < last {
		return false
	}
	return true
}