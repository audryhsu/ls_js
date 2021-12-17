// TODO: refactor the sides properties
// TODO: use variables instead of nested lists for invalid triangle

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2,side3].sort((a,b) => a - b);

    this._isValidTriangle();
  }

  kind() {

    if (this.isEquilateral()) {
      return "equilateral";
    } else if (this.isScalene()) {
      return 'scalene';
    } else if (this.isIsosceles()) {
      return 'isosceles';
    }
  }

  isIsosceles() {
    let [shortest, middle, longest] = this.sides; // use array destructuring syntax
    if (shortest === middle || middle === longest) return true;
    return false;
  }

  isEquilateral() {
    return this.sides.every(side => side === this.sides[0]);
  }

  isScalene() {
    let [shortest, middle, longest] = this.sides; // use array destructuring syntax
    if ((shortest !== middle) && shortest !== longest && middle !== longest) return true;
    return false;
  }

  _isValidTriangle() {
    if (this.sides.some(length => length <= 0)) {
      throw new Error('sides must be greater than zero');
    } else if (!this.sumOfTwoSides()) {
      throw new Error('sum of lengths of two sides is not greater than remaining side');
    } else {
      return true;
    }
  }

  sumOfTwoSides() {
    let [shortest, middle, longest] = this.sides; // use array destructuring syntax
    console.log(shortest, middle);
    if ((shortest + middle) <= longest) return false;
    return true;
  }
}

const triangle = new Triangle(10,1,3);
console.log(triangle.kind());

module.exports = Triangle;
