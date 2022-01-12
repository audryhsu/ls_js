/*
Account prototype creates user objects.
- when user objs are init, they are "anonymized"
  - create 16 char sequence of letters and numbers
- user objs should not have access to the function that anonymizes a user
- reanonymize method
*/

let Account = (function() {
  //create private scope within the function

  // variables are only accessible via returned object because of closure
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function create_UUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  function isValidPassword(testPassword) {
    return userPassword === testPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userFirstName = firstName;
      userLastName = lastName;
      userPassword = password;
      this.displayName = create_UUID();
      return this;
    },
    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = create_UUID();
      } else {
        return `Invalid password`;
      }
      return true;
    },
    resetPassword(password, newPassword) {
      if (isValidPassword(password)) {
        userPassword = newPassword;
        return true;
      } else {
        return `Invalid password`;
      }
    },
    firstName(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return `Invalid password`;
      }
    },
    lastName(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return `Invalid password`;
      }
    },
    email(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return `Invalid password`;
      }
    },
    displayName() {
      return this.displayName;
    }
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
//
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
