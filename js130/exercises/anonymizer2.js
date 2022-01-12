/*
- each instance method needs to validate the password -- isCorrectPassword()? but not be inherited?
*/
'use strict';


let Account = (function() {
  // initialize variables for private data so that all methods have access to variables
  let userEmail;
  let userPassword;
  let userfirstName;
  let userlastName;

  function _anonymize() {
    let UID = '';
    while (UID.length <= 16) {
      UID += _generateRandomChar();
    }
    return UID;
  }

  function _generateRandomChar() {
    const chars = 'abcdefghijklmnopqrstuvwkyz1234567890'.split("")
    let randIdx = Math.floor(Math.random() * chars.length)
    return chars[randIdx];
  }

  function _validatePassword(attemptPassword, correctPassword) {
    if (attemptPassword !== correctPassword) {
      throw new Error("Invalid password")
    } else {
      return true;
    }
  }

  return {

    init(email, password, firstName, lastName){
      // assign values to private properties
      userEmail = email;
      userPassword = password;
      userfirstName= firstName;
      userlastName = lastName;
      this.displayName = _anonymize();
      return this;
    },

    reanonymize(attemptPassword) {
      _validatePassword(attemptPassword, userPassword);
      this.displayName = _anonymize();
      return true
    },
    resetPassword(attemptPassword, newPassword) {
      _validatePassword(attemptPassword, userPassword);
      userPassword = newPassword;
      return true;
    },
    firstName(attemptPassword) {
      _validatePassword(attemptPassword, userPassword);
      return userfirstName;
    },

    lastName(attemptPassword) {
      _validatePassword(attemptPassword, userPassword);
      return userlastName;
    },
    email(attemptPassword) {
      _validatePassword(attemptPassword, userPassword);
      return userEmail;
    },
  }
}());

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
