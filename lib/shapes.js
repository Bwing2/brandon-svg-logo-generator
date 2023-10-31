class Shape {
  constructor(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  // Creates setColor() method that checks if the color is the same as the shape color.
  setColor(color) {
    this.shapeColor = color;
  }
}

// Inherits Shape class variables to use for creating svg.
class Circle extends Shape {
  constructor(letters, textColor, shapeColor) {
    // super() is used to call parent class's constructor to access parent class's functionality.
    super(letters, textColor, shapeColor);
  }
  // render() method is used to generate and return a string created using template literals.
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="75" y="25" height="150" width="150" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

// Exports object with 3 classes.
module.exports = { Circle, Triangle, Square, Shape };
