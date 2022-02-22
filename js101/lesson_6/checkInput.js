only accept y, Y, n, N as valid inputs
create error message for anything Else

let validInputs = ['y', 'Y', 'n', 'N']

do:
//ask if they want to play again
// while input isn't valid:
print error message
// ask again for input
// check input


input ==> user response
output ==> boolean

function inputIsValid(userResponse) {
  let validInputs = ['y', 'Y', 'n', 'N'];
  return validInputs.includes(userResponse.trim());

}
