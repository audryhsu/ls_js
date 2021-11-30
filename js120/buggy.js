function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// = Good Morning Victor

/*
On line 26, we initialize helloVictor variable as the return value of the the createGreeter factory function with  Victor passed in as the argument.
helloVictor is an object with a name property with "Victor" as the value. On line 27, we invoke the greet method with 'morning' passed in as the argument. We would expect the method to log "Good Morning Victor", however instead we get ReferenceError: morning is not defined.
To correct the bug, we need to add the `this` keyword infront of morning and name in the string interpolation in the switch statement to access the properties of helloVictor object.
*/
