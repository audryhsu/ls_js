/*
Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/
/*
/*
input: id, transactions
output: boolean if item is available
rule: item is available if:
  - sum of quantity values of id > 0
  - movement 'in', +
  - movement 'out', - quantity
algo:
- get all transactions for id in an array
- calculate available quantity
  - loop thorugh array and get quantity
    - if movmeent 'in', add
    - if movmeent' out, subtract from quantity
  - reduce to quantity sum
  if sum >  0, return true
*/

function isItemAvailable(id, transactions) {
  let itemTrans = transactionsFor(id, transactions);
  let quantity = itemTrans.reduce((totalQuantity, transaction) => {
    if (transaction.movement === 'in') totalQuantity += transaction.quantity;
    else totalQuantity -= transaction.quantity;

    return totalQuantity;
  }, 0);

  console.log(quantity);
  return quantity > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(trans => trans.id === id);

}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];
isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
