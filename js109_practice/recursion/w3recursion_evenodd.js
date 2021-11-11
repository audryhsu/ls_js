//binary search

// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

arr = [0,1,2,3,4,5,6,7,8,9];


function binary(target, arr) {
  if (arr[Math.floor(arr.length / 2)] === target) {
    console.log('Target found!');
    return arr[Math.floor(arr.length / 2)];
  }
  if (arr.length === 3) {
    if (arr[Math.floor(arr.length / 2)] < target) {
      console.log('To the right!');
      return arr[Math.floor(arr.length / 2)] + 1
  } else {
    console.log('To the left!');
    return arr[Math.floor(arr.length / 2)] - 1;
  }
  }
  if (arr[Math.floor(arr.length /2)] !== target) {
    if (arr[Math.floor(arr.length /2)] < target) {
      arr = arr.slice(Math.floor(arr.length / 2) +1);
      console.log('Slice to right', arr);
      return binary(target, arr);
    } else {
      arr = arr.slice(0, Math.floor(arr.length / 2));
      console.log('Slice to left', arr);
      return binary(target, arr);
    }
  }
}

console.log(binary(1, arr));
