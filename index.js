// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Inputs: (Questions section(
/*User's name, 
User's GitHub username, 
Users's email address)), 
Project title, 
Project Description, 
Contributors, 
Installation Instructions, 
Usage Instructions,
// Table of Contents - generated from the information provided by the user
// Checkbox: License (user selects the relevant license)
*/
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: '',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
            default: '',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please enter the GitHub usernames of this project\'s contributors',
            default: '',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions here',
            default: '',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions here',
            default: '',
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please select the relevant licenses for this project',
            default: '',
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


// (Student Note): Included in a 'generateMarkdown.js" file:

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;
