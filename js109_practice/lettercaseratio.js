//write a function that takes a string and returns an object containing three properties


// regex approach
function letterPercentages(string) {
  // try {
  //   lowerCount = string.match(/[a-z]/g).length;
  // } catch (TypeError) {
  //   lowerCount = 0;
  // }  try {
  //   upperCount = string.match(/[A-Z]/g).length;
  // }  catch (TypeError) {
  //   lowerCount = 0;
  // }
  // try {
  //   otherCount = string.match(/[^a-zA-Z]/g).length;
  // } catch (TypeError) {
  //   lowerCount = 0;
  // }

  function percentage(regex) {
    let matchCount = string.match(regex) || []
    return matchCount.length / string.length * 100;
  }

  return {
    lowercase: percentage(/[a-z]/g).toFixed(2),
    uppercase: percentage(/[A-Z]/g).toFixed(2),
    neither: percentage(/[^a-zA-Z]/g).toFixed(2),
  };

}

// iterative approach
// function letterPercentages(string) {
//   let arr = string.split("").forEach((char, i) => {
//     if ((char.charCodeAt() >= 65) && (char.charCodeAt() <= 90)) upperCount += 1;
//     else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) lowerCount += 1;
//     else {
//       otherCount += 1;
//     }
//   });
//
//   ratios['lowercase'] = (lowerCount / string.length) * 100;
//   ratios['uppercase'] = (upperCount / string.length) * 100;
//   ratios['neither'] = (otherCount / string.length) * 100;
//
//   console.log(ratios);
//   return ratios;
// }


// letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

let result = letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(result);
