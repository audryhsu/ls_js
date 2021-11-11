//input: year integer
//output: string that represents the century, century number and ends with correct ending
//rule: years that end in 01 are the n + 1 century
  // 1990 - 20
  // 5 - 1st
  // 100 - 1st
  // 101 - 2nd

// <= 100..1st century
// 101+ ... 1+1 = 2nd century
// 501+ ... 5+1 = 6th century
// 2001+... 20 + 1 = 21st century
// 1127... 11+1 = 12th century
//algo: look at last two digits. if it's 00, century is first digit.
  // otherwise, century is first digits + 1
  let obj = {0: 'th', 1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6:'th', 7:'th', 8: 'th', 9:'th', 10: 'th', 11:'th', 12:'th', 13:'th'}

function calculateCentury(year) {
  if (year <= 100) return 1;
  let lastTwoDigits = String(year).substring(String(year).length - 2);
  if (lastTwoDigits === "00") {
    return Number(String(year).substring(0, String(year).length - 2));
  } else {
    return Number(String(year).substring(0, String(year).length - 2)) + 1;
  }
}

function centuryEnding(century) {
  let strCentury = digits = String(century);
  if ((strCentury.length === 2) && !['11','12','13'].includes(strCentury)) {
    //look at last two digit        s
    digits = strCentury.substring(strCentury.length - 1);
  }
  if (strCentury.length > 2) {
    digits = strCentury.substring(strCentury.length - 2);
    if (digits[0] === "0") digits = String(Number(digits));
  }
  for (let prop in obj) {
    if (prop === digits) return obj[prop];
  }
  return 'th';
}

function century(year) {
  let century = calculateCentury(year);
  console.log(`${century}${centuryEnding(century)}`);

  return `${century}+${centuryEnding(century)}`
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
