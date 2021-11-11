// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.
// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

//input: nested array that represents a grocery list
//output: one dimensional array
//rule: repeat each fruit name by the number of quantity from input array
// for each fruit, create a subarray and fill the fruit based on quantity
// push subarray into result array.
// flatten result array into 1 D

// let arr = Array(3)
// arr.fill('apple', 0, 4)
// let arr2 = ['hi','hi']
// arr = arr.concat(arr2)
// console.log(arr);

// This is super concise by destructuring the fruit subarray as the iterable passed into map!
function buyFruit(groceryList) {
  return groceryList.map(([fruit,count]) =>
    Array(count).fill(fruit)
  ).flat();
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
