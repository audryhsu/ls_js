/*
number of differences between two homologous dna strands -- measure of min num of point mutations that could have occurred between two strands aka Hamming distance.

Hamming only for sequences of equal lenghth -- if unequal, stop comparing when the shorter length is done.
*/
/*
input:
- create DNA class, takes a string dna sequences as a property
- write a 'hammingDistance' method, which takes in a string that represents the sequence to compare to.
  - method outputs numebr of mutation points
output: number representing point mutations
rule:

- if both strands have len <=0, return 0
- identical if length and sequence are the same (return 0)
- check which strand is longer -- only compare up to shortest length
  - compare lengths and stop length variable
algo:
- create class and constructuror
- compare the lengths of my dna and the input strand
  - set the strandCounter variable to the shorter of the two.
  - initialize mutationcounter
- iterate over both strands, for each nucleotide, compare the values.
  - if not equal, increment mutation counter
return mutationcounter.
*/
"use strict";

class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(compareSequence) {
    let strandCounter = this.sequence.length;
    let mutationCounter = 0;
    // if (this.sequence.length === 0 && compareSequence.length === 0) return mutationCounter;
    if (this.sequence.length > compareSequence.length ) {
      strandCounter = compareSequence.length;
    }
    for (var i = 0; i < strandCounter; i++) {
      if (this.sequence[i] !== compareSequence[i]) {
        mutationCounter += 1;
      }
    }

    return mutationCounter;
  }
}
module.exports = DNA;
