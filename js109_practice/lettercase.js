// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

//input: string
//output: object with three properties: num of lowercase letters, uppercase, and chars that are neither
//rule: whitespace, numbers, chars -- count as neither
//algo: if char is inbetween lower case...else it's a char

function letterCaseCount(str) {
  let obj = {'lowercase': 0, 'uppercase': 0, 'neither': 0};

  for (let char of str) {
    if (char >= 'a' && char <= 'z') obj.lowercase +=1;
    else if (char >= 'A' && char <= 'Z') obj.uppercase +=1;
    else {
      obj.neither += 1;
    }
  }
  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
