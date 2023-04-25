// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'mit'){
    return '[license: mit](https://choosealicense.com/licenses/mit/#)';
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'apache 2.0'){
    return '[license: apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'gnu 3.0'){
    return '[license: gnu 3.0](https://choosealicense.com/licenses/gpl-3.0/)';
  } 
}

function renderLicenseSection(license) {
  if(license === 'none'){
    return '';
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

${renderLicenseSection(data.license)}

## Questions

If you have any questions or issues, please email me at ${data.email}. You can also find more of my work at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
