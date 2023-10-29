class Shape {
  constructor(letters, textColor, shape, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(letters, textColor, shape, shapeColor) {
    super(letters, textColor, shape, shapeColor);
  }
  render() {
    return `<svg height="200" width="300"><rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}"/><font color="${this.textColor}>${this.letters}<font/></svg>`;
  }
}

class Triangle extends Shape {
  constructor(letters, textColor, shape, shapeColor) {
    super(letters, textColor, shape, shapeColor);
  }
  render() {
    return `<svg height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><font color="${this.textColor}>${this.letters}<font/></svg>`;
  }
}

class Square extends Shape {
  constructor(letters, textColor, shape, shapeColor) {
    super(letters, textColor, shape, shapeColor);
  }
  render() {
    return `<svg height="200" width="300"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><font color="${this.textColor}>${this.letters}<font/></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
