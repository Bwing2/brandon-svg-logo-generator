const inquirer = require("inquirer");
const fs = require("fs");
// Retrieves object exports from shapes.js file
const { Circle, Triangle, Square } = require("./lib/shapes.js");

// Uses inquirer to prompt the user about letters, text color, shape, and shape color.
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

// init() function that takes results from questions prompt and uses the data to create the logo.
function init() {
  inquirer.prompt(questions).then((data) => {
    // destructures the questions object into the data variable.
    const { letters, textColor, shape, shapeColor } = data;

    const filename = `./examples/${shape}.svg`;

    console.log(data);

    let finalSvg;

    // Checks what shape is chosen from prompt and uses the corresponding answers to render svg.
    if (shape === "Circle") {
      svg = new Circle(letters, textColor, shapeColor);
      finalSvg = svg.render();
    } else if (shape === "Triangle") {
      svg = new Triangle(letters, textColor, shapeColor);
      finalSvg = svg.render();
    } else if (shape === "Square") {
      svg = new Square(letters, textColor, shapeColor);
      finalSvg = svg.render();
    }

    writeToFile(filename, finalSvg, shape);
  });
}

// Writes data to a file under filename parameter and console.logs an error if there is one. Otherwise console.logs logo generated message.
// shape parameter is passed down from init() function to display chosen shape.
function writeToFile(filename, data, shape) {
  fs.writeFile(filename, data, (err) => {
    err
      ? console.log(err)
      : console.log(`${shape} Logo generated in examples folder!`);
  });
}

// Runs init function
init();
