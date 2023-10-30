const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Circle", () => {
  it("Should create instance of Circle class", () => {
    const circle = new Circle();
    console.log(circle);
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
