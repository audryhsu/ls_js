let Account = (() => {
  return () => {
    let userName;
    let userPassword;
    let userEmail;
    let userLastName;

    function anonymize() {
      let displayName = '';
      let chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
      for (let i = 0; i < 16; i += 1) {
        displayName += chars[randomNum(chars.length)];
      }

      return displayName;
    }

    function randomNum(length) {
      return Math.floor(Math.random() * length);
    }

    function validatePassword(password) {
      return userPassword === password;
    }

    return (function() {
      return {
        init: function(email, password, firstName, lastName) {
          userName = firstName;
          userPassword = password;
          userEmail = email;
          userLastName = lastName;
          this.displayName = anonymize();
          return this;
        },

        reanonymize: function(password) {
          if (validatePassword(password)) {
            this.displayName = anonymize();
            return true;
          } else {
            return 'Invalid password!';
          }
        },

        resetPassword: function(password,newPassword) {
          if (validatePassword(password)) {
            userPassword = newPassword;
            return true;
          } else {
            return 'Invalid password!';
          }
        },

        firstName: function(password) {
          return validatePassword(password) ? userName : 'Invalid Password!';
        },

        lastName: function(password) {
          return validatePassword(password) ? userLastName : 'Invalid Password!';
        },

        email: function(password) {
          return validatePassword(password) ? userEmail : 'Invalid Password!';
        },

        displayName: function() {
          return this.displayName;
        }
      };
    })();
  };
})();

let creator1 = Account();
let creator2 = Account();
let fooBar = creator1.init('foo@bar.com', '123456', 'foo', 'bar');
let bazQux = creator2.init('baz@qux.com', '654321', 'baz', 'qux');
console.log(bazQux.firstName('654321')); // logs 'baz'
console.log(fooBar.firstName('123456')); // logs 'foo'
