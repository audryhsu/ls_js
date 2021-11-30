let arr = '1245'.split("")
//input: array
//output: string
//rule: deliminate each elemtn with a ", " except for the last two elements to include an or
  //if only two elements, deliminate with "or "
//algo:


function joinOr(array, delimiter= ', ', conjunction= 'or') {
  return array.map((element, i) => {
    if (array.length < 3) {
      return i === array.length - 1 ? `${conjunction} ` + element : element;
    } else {
      return i === array.length - 1 ? `${conjunction} ` + element : element + `${delimiter}`
    }
  }).join("");
}

console.log(joinOr(arr, '; ', 'boo'));
