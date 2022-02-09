/*
problem:
input: string
output: object with three properties
rule: - lowercase letters
 - chars uppercase
 - chars that are neither
 - numbers are neither , numbers, whitespace
 - rounded to 2 decimal places toFixed?
 - convert percentages to string values
algo:
- regex matching, then filter the match array
- helper function that calculates percentages
ds: arrays

*/
function letterPercentages(string) {
  if (typeof string !== 'string') return null;
  let percs = {
    lowercase: "0.00",
    uppercase: "0.00",
    neither: "0.00"
  };
  if (string === '') return percs;
  let l = string.match(/[a-z]/g) || [];
  let u = string.match(/[A-Z]/g) || [];
  let n = string.match(/[^a-zA-Z]/g) || [];

  percs['lowercase'] = ((l.length / string.length) * 100).toFixed(2);
  percs['uppercase'] = ((u.length / string.length) * 100).toFixed(2);
  percs['neither'] = ((n.length / string.length) * 100).toFixed(2);
  console.log(percs);

}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
letterPercentages('@#$^');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
letterPercentages('   ');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
letterPercentages('');
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }
letterPercentages(3); // null;
