// Imports object with 3 classes from shapes.js
const { Circle, Triangle, Square, Shape } = require("../lib/shapes.js");

describe("Circle", () => {
  describe("Create instance", () => {
    it("Should create instance of Circle class", () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe("Return shape and color argument", () => {
    it("Should render blue Circle", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toContain(
        `<circle cx="150" cy="100" r="80" fill="blue" />`
      );
    });
  });
});

describe("Triangle", () => {
  describe("Create instance", () => {
    it("Should create instance of Triangle class", () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("Return shape and color argument", () => {
    it("Should render blue Triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toContain(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
      );
    });
  });
});

describe("Square", () => {
  describe("Create instance", () => {
    it("Should create instance of Square class", () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  describe("Return shape and color argument", () => {
    it("Should render blue Square", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toContain(
        `<rect x="75" y="25" height="150" width="150" fill="blue" />`
      );
    });
  });
});

describe("Shape", () => {
  describe("return function", () => {
    it("Should set shapeColor property to blue", () => {
      let shape = new Shape();
      shape.shapeColor = "blue";
      expect(shape.shapeColor).toBe("blue");
    });
  });
});

// Make sure to add this to package.json for tests to run, also have jest installed.
// "scripts": {
// "test": "jest"
// },
