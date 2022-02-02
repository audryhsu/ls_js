/*
/*
input: string
output: boolean if it's valid email
rule:
- must be one @
- local part contains one or more letters and/or digits. not other characters.
- domain must have two or more components separated by a .
- each component is one or more letters
algo:
edge - domains that include a server name
*/
// function isValidEmail(email) {
//   let local = email.split('@')[0]
//   let domain = email.split('@')[1]
//
//   let re = new RegExp(/[^A-Za-z0-9]+/)
//   // if local has a non alphanumeric character, it's invalid
//   if (re.test(local)) {
//     console.log(email, local, re.test(local))
//     return false;
//   }
//
//   let red = new RegExp(/[a-z]+\.[a-z]+\b/, 'i');
//   // if domain doesn't match pattern, invalid email
//   if (!red.test(domain)) {
//
//     console.log(email, domain, red.test(domain));
//     return false;
//   }
// }

function isValidEmail(email) {
  let local = email.split('@')[0];
  let domain = email.split('@')[1];
  let re = new RegExp(/\b^.[A-Za-z0-9]+@[a-z]+\.[a-z]+\b/, 'i');

  console.log(email, email.match(re));
  if (email.match(re)) {
    return true;
  }
  return false;
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false ??
isValidEmail('foo@bar.....com');         // returns false
