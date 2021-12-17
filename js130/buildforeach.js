class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");

arr = [1,2,3,4];

function forEach(array, callbackfn, thisArg) {
  for (var i = 0; i < array.length; i++) {

    callbackfn.call(thisArg, array[i], i, array);
  }
}

// Our forEach function
forEach(arr, function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
