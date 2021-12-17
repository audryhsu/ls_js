/*
input: an interger number
output: classification string
rule:
- negative number raises an error
algo:

- calculate Aliquot sum
  - finding positive perfect divisors (excluding itself )
  - taking the sum;

- classify number
  - perfect: Aliquot sum === input number
  - abundant: AS > input number
  - deficient: AS < input number


*/
class ClassName {
}
class PerfectNumber {
  constructor() {

  }
  static classify(n) {
    let aliquotSum = PerfectNumber.calculateAliquotSum(n);
    if (aliquotSum === n) return 'perfect';
    else if (aliquotSum > n) {
      return 'abundant';
    } else if (aliquotSum < n) {
      return 'deficient';
    }
  }

  static _isValidInput(n) {
    if (n < 0) throw new Error('Cannot be a negative number');
  }

  static calculateAliquotSum(n) {
    PerfectNumber._isValidInput(n);
    let divisors = [];
    let counter = 1;

    while (counter < n) {
      if (n % counter === 0) divisors.push(counter);
      counter++;
    }
    return divisors.reduce((acc, currentValue) => acc + currentValue , 0);
  }
}

console.log(PerfectNumber.classify(15)
);
module.exports = PerfectNumber;
