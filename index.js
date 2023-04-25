// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name:'Title',
    message:'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message:'Give a description of your project'
},
{
    type: 'input',
    name: 'installation',
    message: 'Describe the installation if any:'
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the project usage for?'
},
{
    type: 'list',
    name: 'license',
    choices: [
        'None',
        'MIT',
        'Apache 2.0',
        'GNU 3.0'
    ]
},
{
    type: 'input',
    name: 'Contribution',
    message: 'Who are the contributors to this project?'
},
{
    type: 'input',
    name: 'test',
    message: 'Is there a test included?'
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your Github username?'
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your Email?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README.md has been generated!');
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
      })
      .catch((err) => console.error(err));
  }

// Function call to initialize app
init();
