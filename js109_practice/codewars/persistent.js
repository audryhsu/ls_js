// var maxSequence = function(arr){
//     var currentSum = 0;
//     return arr.reduce(function(maxSum, number){
//       console.log(`Max Sum: ${maxSum}`);
//
//       console.log(`Current Sum + number =  ${currentSum} + ${number} == ${currentSum + number}`);
//         currentSum = Math.max(currentSum+number, 0);
//
//         return Math.max(currentSum, maxSum);
//     }, 0);
// }

let maxSequence = (arr) => {
  let currentSum = 0;
  let findMaxSum = (maxSum, currentValue) => {
    currentSum = Math.max(currentSum + currentValue, 0);
    return Math.max(currentSum, maxSum);
  }

  return arr.reduce(findMaxSum, 0);
}

let result = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

console.log(result);
