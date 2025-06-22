func maxProfit(prices []int) int {
	maxp := 0
	minb := prices[0]
	for i := 1; i < len(prices); i++ {
		minb = min(minb, prices[i])
		diff := prices[i] - minb
		maxp = max(maxp, diff)
	}
	return maxp
}