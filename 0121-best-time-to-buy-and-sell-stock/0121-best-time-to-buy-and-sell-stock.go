func maxProfit(prices []int) int {
	maxp := 0
	minb := prices[0]
	for i := 1; i < len(prices); i++ {
		minb = min(minb, prices[i])
		maxp = max(maxp, prices[i] - minb)
	}
	return maxp
}