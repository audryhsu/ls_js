/*
//input: no args
//output: return prototype chain (ancestors) of calling object as an array of object NAMES
//rule:
//algo: recursion? get name property of calling obj's prototype.
*/

// name property added to make objects easier to identify
let foo = {name: 'foo',
  ancestors: function() {
    let ancestors = [];
    let proto = Object.getPrototypeOf(this);

    do {
      if (proto.name) {
        ancestors.push(proto.name)
      } else {
        ancestors.push('Object.prototype');
      }
      proto = Object.getPrototypeOf(proto);
    } while (proto);

    return ancestors;
  }
};

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

// console.log(bar.__proto__.name);
let proto = Object.getPrototypeOf(qux);
proto = Object.getPrototypeOf(proto)
proto = Object.getPrototypeOf(proto)
proto = Object.getPrototypeOf(proto)

// console.log(proto.name);
console.log(
qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
