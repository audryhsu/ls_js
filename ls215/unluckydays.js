/*
input: year integer , greater than 1752
  - assume future years are ok
output: number of fri 13ths
rule:
algo:
- loop through entire calendar year given year
  - loop through each month
  - create a new date for the 13th of that month
  - check if Friday, if yes, increment
- 13th --> if also friday, then increase counter
d.getDay() === 5
d.getDate() === 13
ds: array for months to loop
- reduce to count of friday thirteenths
*/
const months = [0,1,2,3,4,5,6,7,8,9,10,11]; // months are zero indexed

function fridayThe13ths(year) {
  return months.reduce((result, currentMonth, _) => {
    let d = new Date(year, currentMonth, 13);

    return d.getDay() === 5 ? result += 1 : result;
  }, 0);
}

console.log(
  fridayThe13ths(1986) === 1,     // 1
  fridayThe13ths(2015) === 3,
  fridayThe13ths(2017) === 2

);
