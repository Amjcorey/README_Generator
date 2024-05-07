// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// This function writes the users README file using user input
function writeToFile(fileName, data) {
  let fileText = "";
  // Users name
  fileText += `${data.name}'s README\n\n`;
  // Users README title
  fileText += ` # ${data.title}\n\n`;
  // Licensing badge
  fileText += `${generateLicense(data.license)}\n\n`;
  // Table of contents
  fileText += `## Table of Contents\n\n`;
  // Links to sections within the table of contents
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  // Description section
  fileText += `## Description\n\n${data.description}\n\n`;
  // Installation section
  fileText += `## Installation\n\n${data.installation}\n\n`;
  // Usage information section
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  // Contribution guidelines section
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  // Test instructions section
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  // License section (complete with NOTICE)
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  // Questions section
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  // Link to users GitHub
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  // Link to users email
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  // Utilizing the file system write file method to generate the users README.md doc along with error handling, that tells the user "Success!" within the terminal when README is successfully generated or logs any errors to the console
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// This function handles the licensing badges
function generateLicense(license) {
  // MIT License
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// Function to initialize app
function init() {
  inquirer
    .prompt([
      // Create an array of questions for user input
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Add the description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Add the installation instructions of your project:",
      },
      {
        type: "input",
        name: "usage",
        message: "Add the usage information of your project:",
      },
      {
        type: "input",
        name: "Contribution",
        message: "Add the contribution guidelines of your project:",
      },

      // README test instructions input
      {
        type: "input",
        name: "test",
        message: "Add the test instructions of your project:",
      },
      //string
      {
        type: "list",
        name: "license",
        message: "Please select a repository license:",
        choices: [
          "MIT",
          "Apache 2.0 License",
          "IBM Public License Version 1.0",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub URL:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
      },
    ])
    // .then takes the user inputs from the prompts answered above 
    // then injects them into the writeToFile function and generates "sample-README.md" with user data
    .then((answers) => {
      console.log(answers);
      mdFile = generateMarkdown(answers);
      writeToFile("sample-README.md", mdFile);
    });
}

// Function call to initialize app
init();
