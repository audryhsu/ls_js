/*
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/

/*
questions:
  - what if fruit is ""? don't add to the expanded list
  - what if quantity is not a number?
    - string num --> coerce into an number
    - falsey values --> don't add it to the list, ignore
    - item isn't in an array?  {'apple': 1}
      - valid, convert it into an array.
    - nested array is empty? return empty array
input: grocery list, in a 2d array
  - each nested array represents item (str), and quantity (number)
output: array that repeats each fruit based on the quantity in grocery list
rule: repeat the item string and add it to the groceries array

algo:
 - for each nested array
  - create an array and loop n times, pushing item to the array
  - add the arrya to result array.
*/
function buyFruit(groceryList) {
  groceryList = validateInput(groceryList);
  if (!groceryList) return null;

  let longList = groceryList.flatMap(([item, quantity]) => {
    let items = [];
    for (let i = 0; i < quantity; i++) {
      items.push(item);
    }
    return items;
  });
  console.log(longList);
}

function validateInput(nestedArr) {
  if (!Array.isArray(nestedArr)) {
    if (typeof nestedArr === 'object') {
      return Object.entries(nestedArr);
    }
    return null;
  }
  if (nestedArr.some(array => !Array.isArray(array))) {
    console.log("nested items are not arrays.");
    return null;
  }
  return nestedArr;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
buyFruit([['apple', 3], ['orange', 1], undefined]); //null
buyFruit([['apple', 3], ['orange', 1], 'monkeybread']); // null
buyFruit({apple:1, orange: 2}); // ['apple', 'orange', 'orange']
