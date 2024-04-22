// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// const { default: Choices } = require("inquirer/lib/objects/choices");

// Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the project title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'What is the project description?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Plesae include any installation instructions',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please enter the usage of this repository',
        },
        {
          type: 'input',
          name: 'Contribution',
          message: 'Please enter the contribution instructions',
        },
        //string
        {
            type: 'list',
            name: 'license',
            message: 'Please select a repository license:',
            choices: ["Apache 2.0", "BSD 3", "GPL 3.0", "None"],
          }, 
          {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
          }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Success!');
    });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    mdFile = generateMarkdown(answers);
    writeToFile('README.md',mdFile);
   });
}

// Function call to initialize app
init();