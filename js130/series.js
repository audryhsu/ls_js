/*
input: string of digits
output: all possible consecutive number series of n length
- nested array of series, where each nested array has n elements
rule:
- if n >= str length, throw error

- slice method on a series object, takes n argument
algo:
01234, n 3
- take a slice of the string
- str.substring(start, end)
  sbustring(0, i + 3)
  - increment i
  repeat counter times (1,4)
  - 2,5
*/

class Series {
  constructor(strNum) {
    this.strNum = strNum;
  }

  slices(n) {
    let counter = this.strNum.length - n + 1;
    if (counter <= 0) {
      throw new Error('Error!');
    }

    let substrings = [];
    let start = 0;
    let end = n;

    while (start < counter) {
      substrings.push(this.strNum
        .substring(start, end)
        .split("")
        .map(elem => Number(elem))
      );
      start++;
      end++;
    }
    return substrings;
  }
}

module.exports = Series;
