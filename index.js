// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your github profile:',
        },
        {
            type: 'input',
            name: 'title',
            message:  'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'link',
            message: 'The link to your github or deployment:', 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description for your project:', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give installation instructions:', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information:', 
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: "Test Instructions:", 
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose any licensing needed:",
            choices: ['MIT', 'Mozilla', 'Apache 2.0', 'Boost', 'none'],
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('exampleREADME.md', data, (err) => {
        err ? console.log(err) : console.log('Go Check')
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => writeToFile('exampleREADME.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
