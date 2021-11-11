// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.
//
// You may (and should) use the transactionsFor function from the previous exercise.

//input: itemID, list of transactions
//output: boolean
//rule: only return true if the sum of the quantity values of the item transactions is > 0
//algo: access the quantity property of each transaction from  the list of transactions returned by transactionsFor function.
// if movment === 'out', multiply quantity by -1 and push to result array
// else, push quantity to result array
//sum the quantity array and return true if > 0

// using map and reduce
function isItemAvailable(itemID, transactions) {
  let trans = transactionsFor(itemID, transactions);
  let quantity = trans.map(transaction => transaction.movement === 'in' ? transaction.quantity : transaction.quantity * - 1)
  .reduce((accum, value) => accum + value);
  console.log(quantity);
  return quantity > 0;

}
// solution using just reduce
// function isItemAvailable(itemID, transactions) {
//   let quantity = transactionsFor(itemID, transactions).reduce((sum, transaction) => {
//     if (transaction.movement === 'in') {
//       return sum + transaction.quantity;
//     } else {
//       return sum + transaction.quantity * -1;
//     }
//   }, 0);
//   console.log(quantity);
//   return quantity > 0;
// }

function transactionsFor(itemID, transactions) {
  return transactions.filter(item => item['id'] === itemID);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
