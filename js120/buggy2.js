let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let newPrice = this.price - discount;

    return newPrice;
  },
};

let result = item.discount(20);   // should return 40
// = 40
console.log(result);
result = item.discount(50);   // should return 25
// = 20
console.log(result);
result = item.discount(25);   // should return 37.5
console.log(result);
// = 15

/*
the item variable is being initialized as an object with a name, descirption ,price, quantity, and discount properties. the discount method is defined as a function that takes a percent arg, and then updates the price property after subtracting the discount amount from the original price.

the discount method mutates the state of the item object. Each time the discount method is called,  the item price is updated to the discounted price. The next time discount is invoked, the discount is based off of the previously discounted price (e.g. running discount rather than calculating the discount off of the original price 50 each time).

This code demonstrates the concept that objects are mutable.

*/
