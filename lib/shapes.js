class Shape {
  constructor(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="80"fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(letters, textColor, shapeColor) {
    super(letters, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.letters}</text></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
