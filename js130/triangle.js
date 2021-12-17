// TODO: refactor the sides properties
// TODO: hide the isValidTrianglem method to become private

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sides = [this.side1, this.side2, this.side3].sort();
    
    this._isValidTriangle();
  }
  static idxs = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 2, 0]
  ];

  kind() {
    if (this.isEquilateral()) {
      return "equilateral"
    } else if (this.isScalene()) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  // isIsosceles() {
  //   // Triangle.idxs.map((idx, _) => {
  //   //   if (this.sides[idx[0]] === this.sides[idx[1] && this.sides[idx[0]] !== this.sides[idx[2]]]) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // }).every(elem => true);
  // }

  isEquilateral() {
    return this.sides.every(side => side === this.side1);
  }

  isScalene() {
    return Triangle.idxs
      .map(idx => this.sides[idx[0]] !== this.sides[idx[1]])
      .every(elem => elem === true)
  }

  _isValidTriangle() {

    if (this.sides.some(length => length <= 0)) {
      throw new TypeError('sides must be greater than zero');
    } else if (!this.sumOfTwoSides(this.sides)) {
      throw new TypeError('sum of lengths of two sides is not greater than remaining side');
    } else {
      return true;
    }
  }

  sumOfTwoSides() {
    let sum;
    let tests = Triangle.idxs.map((idx, i) => {
      sum = this.sides[idx[0]] + this.sides[idx[1]];
      if (sum > this.sides[idx[2]]) return true;
      return false;
    });
    return tests.every(test => test);
  }
}

const triangle = new Triangle(2, 2, 2);
console.log(triangle.kind());

module.exports = Triangle;
