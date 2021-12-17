/*
input: natural number, and a set of one or more other numbers
 - if set not given, defualt is 3 and 5
output: sum of ALL multiples of each number in the set AND are less than first number (exclusive)

rule:
- if input number is less than default nums (3, 5) or given set of numbers, return 0
algo:

- for each number in set:
  - set counter = 1
  - while counter is less than capNumber:
    - push number * counter to multiples array
- get sum of multiples.
-
*/

class SumOfMultiples {
  constructor(...args) {
    this.set = args.length > 0 ? [...args] : [3,5];
  }
  static to(limitNum) {
    return new SumOfMultiples().to(limitNum);
  }

  to(limitNum) {
    let allMultiples = this.set.map(number => {
      let counter = 1;
      let multiple;
      let multiples = [];

      while (true) {
        multiple = counter * number;
        if (multiple >= limitNum) break;
        multiples.push(multiple);
        counter += 1;
      }
      return multiples;
    });

    return this.dedupeArray(allMultiples.flat())
      .reduce((acc, currentValue) => acc + currentValue , 0);
    // console.log(result);
  }

  dedupeArray(array) {
    let deduped = [];
    array.forEach((item, _) => {
      if (!deduped.includes(item)) deduped.push(item);
    });
    return deduped;
  }
}

let obj = new SumOfMultiples();
console.log(obj.to(10));
console.log(obj.to(100));

module.exports = SumOfMultiples;
