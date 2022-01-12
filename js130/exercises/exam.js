let portfolio =  (function createStockPortfolio(initialBalance) {
  let balance = initialBalance;
  let stocks = {};

  return {
    buy(stock, shares, pricePerShare) {
      let totalCost = shares * pricePerShare;
      if (totalCost > balance) {
        throw Error("Insufficient balance to purchase shares");
      }

      if (!(stock in stocks)) {
        stocks[stock] = 0;
      }

      stocks[stock] += shares;
      balance -= totalCost;
    },
    sell(stock, shares, pricePerShare) {
      if (!(stock in stocks)) {
        stocks[stock] = 0;
      }

      if (stocks[stock] < shares) {
        throw Error("You don't own enough shares of that stock.");
      }

      let totalPrice = shares * pricePerShare;
      balance += totalPrice;
      stocks[stock] -= shares;
    },
    // UPDATED METHOD TO RETURN STRING
    getBalance() {
      return `Portfolio balance: ${balance}`;
    },
    // UPDATED METHOD TO RETURN STRING
    getStocks() {
      let header = `-- My stock portfolio: ---\n`;
      let myStocks = '';
      Object.keys(stocks).forEach(stock => {
        myStocks += `${stock}: ${stocks[stock]}\n`;
      });
      return header + myStocks;
    }
  };
})(10000);

portfolio.buy('AAPL', 1, 100);
portfolio.buy('AAPL', 1, 500000); // Error: Insufficient balance to purchase shares

console.log(portfolio.balance); // undefined
console.log(portfolio.getBalance()); // Portfolio balance: 10000

console.log(portfolio.stocks); // undefined
console.log(portfolio.getStocks()['TSLA'] = 9999999999); // Does nothing
console.log(portfolio.getStocks());
// -- My stock portfolio: ---
// AAPL: 1
