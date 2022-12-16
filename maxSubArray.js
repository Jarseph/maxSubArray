function maxSubArray(prices) {
  let bestBuy = -1;
  let bestSell = -1;
  let bestProfit = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > bestProfit) {
        bestBuy = i;
        bestSell = j;
        bestProfit = profit;
      }
    }
  }
  return [bestBuy, bestSell];
}
