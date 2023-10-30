// Imports object with 3 classes from shapes.js
const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Circle", () => {
  it("Should create instance of Circle class", () => {
    const circle = new Circle();
    expect(circle).toBeInstanceOf(Circle);
  });
});

describe("Triangle", () => {
  it("Should create blue Triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toContain(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Make sure to add this to package.json for tests to run, also have jest installed.
// "scripts": {
// "test": "jest"
// },
