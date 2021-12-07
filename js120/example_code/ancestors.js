

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

let names = [];

foo.ancestors = function() {
  if (Object.getPrototypeOf(this) === Object.prototype) {
    names.push('Object.prototype');
    return names;
  }
  names.push(Object.getPrototypeOf(this).name);
  nextObj = Object.getPrototypeOf(this);

  nextObj.ancestors();
};
qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(names);
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']
