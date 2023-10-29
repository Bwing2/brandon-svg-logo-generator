class Shape {
  constructor(textColor, shape, shapeColor) {
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(textColor, shape, shapeColor) {}
}

module.exports = { Circle };
