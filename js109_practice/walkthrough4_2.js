You are going to be given an array of integers. your job is to take that array and find an index N where the sum of the integers to the left of N is equal fo the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

Example:
input = [1,2,3,4,3,2,1]
output = index 3, because at 3rd position of array, sum of left side [1,2,3] is equal to the sum of the right side [3,2,1], both equal 6.

input = [20,10, -80,10, 10, 15, 35]
output = index 0. left side is [], and the right side equals zero.
empty arrays equal 0.

console.log(findEvenIndex([1,2,3,4,3,2,1]) ===3);
console.log(findEvenIndex([1, 100, 50,-51, 1, 1]) === 1);
console.log(findEvenIndex([1,2,3,4,5,6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3);
