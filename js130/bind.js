function myBind(func, context) {
  return function bound() {
    return func.call(context, arguments);
  };
}

let obj = {
  name: 'audry',
  foo(age) {
    function another(age) {
      console.log(`my name is ${this.name} and i am ${age} years old`);
    }
    let bound = myBind(another, obj, age);
    bound();
  }
};

obj.foo();
// let sayMyName = myBind(obj.foo, obj)
// sayMyName()
