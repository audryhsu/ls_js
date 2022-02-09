/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

p: parsing user text
/*
input: string, could contain digits, special characters, spaces, parentheses
output: string of valid digits to represent phone number; if invalid number, return '0' * 10
rule:
- must be at least 10 digits
  - if digits > 10 AND first number !== 1, invalid phone number
  - if digits === 1 AND first number is 1, use last 10 digits

- use regex to replace anything that isn't a digit \D ?
algo:
*/

function cleanPhoneNumber(string) {
  let digits = string.replace(/[\D]/g, '');
  const invalidNumber = '0000000000';

  if (digits.length < 10 || digits.length > 11) {
    return invalidNumber;
  } else if (digits.length === 11) {
    return digits[0] === '1' ? digits.slice(1,) : invalidNumber;
  }

  return digits;
}

// console.log(cleanPhoneNumber('(123)456 7890') === '1234567890' );
// console.log(cleanPhoneNumber('123.456.7890') === '1234567890' );
// console.log(cleanPhoneNumber('123-456-7890') === '1234567890' );
// console.log(cleanPhoneNumber('123 456 7890') === '1234567890' );
// console.log(cleanPhoneNumber('123 456 7000890') === '0000000000' );
console.log(cleanPhoneNumber('123 456 72890') === '2345672890' );
console.log(cleanPhoneNumber('+1 123-456-2890') === '1234562890' );
// console.log(cleanPhoneNumber('..........') === '0000000000' );
// console.log(cleanPhoneNumber('.222.2222.-') === '0000000000' );
