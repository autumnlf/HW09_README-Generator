// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
 let badge = ''
  if ( data.license === 'MIT'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  };
  if ( data.license === 'Mozilla'){
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  };
  if ( data.license === 'Apache 2.0'){
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  };
  if ( data.license === 'Boost'){
    badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  };
  if ( data.license === 'none'){
    badge = ``;
  };
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link = ''
  if ( data.license === 'MIT'){
    link = `https://opensource.org/licenses/MIT`;
  };
  if ( data.license === 'Mozilla'){
    link = `https://opensource.org/licenses/MPL-2.0`;
  };
  if ( data.license === 'Apache 2.0'){
    link = `https://opensource.org/licenses/Apache-2.0`;
  };
  if ( data.license === 'Boost'){
    link = `https://www.boost.org/LICENSE_1_0.txt`;
  };
  if ( data.license === 'none'){
    link = ``;
  };
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let sectionLicense = ''
  if ( data.license === 'none'){
    sectionLicense = ``;
  };
  if (data.license !== 'none') {
    sectionLicense = '## License';
  };
  return sectionLicense
}

function renderLicenseTOC(data) {
  let licenseTOC = ''
  if ( data.license === 'none'){
    licenseTOC = ``;
  };
  if (data.license !== 'none') {
    licenseTOC = '* [License](#license)';
  };
  return licenseTOC
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  **Link to deployed application:**
  > ${data.link}

  ## Description
    ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  ${renderLicenseTOC(data)}
  * [Questions](#questions)

  ##  Installation
  Instruction for installing and running project:

    ${data.installation}

  ## Usage
  Examples for use and instruction:

    ${data.usage}

  ## Contributions
  Instructions for how to make contributions:

    ${data.contribution}

  ## Testing Instructions
  How to run tests for project:

    ${data.instructions}

  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data)}
  
    ${renderLicenseLink(data)}

  ## Questions
  For any questions please use the following contact information:
  * ${data.email}
  * ${data.github}

`;
}

module.exports = generateMarkdown;
