// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Table of Contents
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: function (text) {
                if (text.length < 3) {
                    return 'Please enter your name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: function (text) {
                if (text.length < 6) {
                    return 'Please enter your GitHub username.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function (text) {
                if (text.length < 0) {
                    return 'Please enter your email address, otherwise type n/a.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: function (text) {
                if (text.length < 0) {
                    return 'Please enter your project\'s title.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
            validate: function (text) {
                if (text.length < 3) {
                    return 'Please describe your project.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions here',
            validate: function (text) {
                if (text.length < 3) {
                    return 'Please enter the installation instructions.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions here',
            validate: function (text) {
                if (text.length < 3) {
                    return 'Please enter the usage instructions.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please enter the GitHub usernames of this project\'s contributors',
            validate: function (text) {
                if (text.length < 0) {
                    return 'Please list your project\'s contributors separated by a commas, otherwise type n/a.';
                }
                return true;
            },
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please select the relevant licenses for this project',
            choices: [
                {
                    name: 'MIT',
                },
                {
                    name: 'Apache',
                },
                {
                    name: 'GPL',
                },
                {
                    name: 'None',
                },
            ],
            validate: function (answer) {
                if (answer.length < 1) {
                    return 'Please make at least one selection.';
                }
                return true;
            },
        },

    ]);

const generateMarkdown = (answers) =>
    `# ${answers.title}

#### by: ${answers.username}

[![License](https://img.shields.io/badge/License-${answers.choices}%202.0-blue.svg)](https://opensource.org/licenses/${answers.choices}-2.0)


### **Table of Contents:**



### **Project Description:**  
${answers.description}

### **Installation:**  
${answers.installation}

### **Usage:**
${answers.usage}

### **License:**
${answers.licenses}

### **Contributors:**  
${answers.contributors}

### If you have any questions, please contact ${answers.name} at: ${answers.email}`

const init = () => {
    questions().then((answers) => {
        try {
            const md = generateMarkdown(answers);
            fs.writeFileSync('readme.md', md);
            console.log('Successfully wrote to readme.md');
        } catch (error) {
            console.log(error);
        }
    });
};

// function renderLicenseBadge(license) {
//     if
//  }

init();

// // (Student Note): Included in a 'generateMarkdown.js" file:

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;