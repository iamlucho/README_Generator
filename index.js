// include File System Module
const fs = require("fs");

// include inquirer module
const inquirer = require('inquirer');

// create questions object
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
      validate: validateInput
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
      validate: validateInput
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message: 'Which sections would you like to include in your table of contents?',
      choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests'],
      validate: validateInput
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
      validate: validateInput
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:',
      validate: validateInput
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD 3-Clause', 'None'],
      default: 'None',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
      validate: validateInput
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions for running tests on your project:',
      validate: validateInput
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      validate: validateInput
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: validateEmail,
    },
  ];

// function to validate user input in each question
function validateInput(input) {
    if (!input) {
      return 'Please enter a value.';
    }
    return true;
}

// funtion to validate if email input is a valid email address
function validateEmail(email) {
// Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        return 'Please enter a valid email address.';
    }
    return true;
}

// init function to pass the questions to inquirer
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        console.log("End of test.");
    });
}

// run the init function
init();