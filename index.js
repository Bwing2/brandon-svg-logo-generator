const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

const questions = [
  {
    type: "input",
    name: "letters",
    message: "Please choose up to 3 letters to use for your logo.",
    validate: (letters) => {
      if (letters.length > 3) {
        return "Please use up to 3 letters only.";
      } else {
        return !letters ? "Please enter at least 1 letter" : true;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter a color or hexadecimal number for your logo's text color.",
    validate: (text) => {
      return !text ? "Please enter a color or hexadecimal number." : true;
    },
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    message: "Please choose your desired shape.",
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter a color or hexadecimal number for your shape's color.",
    validate: (shape) => {
      return !shape ? "Please enter a color or hexadecimal number." : true;
    },
  },
];

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    err ? console.log(err) : console.log("Logo generated!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = "logo.svg";

    const { letters, textColor, shape, shapeColor } = data;

    let svg;

    if (shape === "Circle") {
      svg = new Circle();
      return svg.render();
    } else if (shape === "Triangle") {
      svg = new Triangle();
      return svg.render();
    } else if (shape === "Square") {
      svg = new Square();
      return svg.render();
    }

    writeToFile(filename, svg);
  });
}

init();
