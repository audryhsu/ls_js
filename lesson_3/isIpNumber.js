
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");  // [10, 4, 5,11]
  if (dotSeparatedWords.length != 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop(); // 11
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}


let str = '10.4.5.11';
let str2 = '1.2.3.4.5';
let str3 = '4.5.5';
console.log(isDotSeparatedIpAddress(str));

console.log(isDotSeparatedIpAddress(str2));

console.log(isDotSeparatedIpAddress(str3));
