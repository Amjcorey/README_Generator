// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
  } else if (license === "None") {
    return "";
  }
}


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "None") {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  } else if (license === "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 license.";
  } else if (license === "GPL 3.0") {
    return "This project is licensed under the GPL 3.0 license.";
  } else if (license === "BSD 3") {
    return "This project is licensed under the BSD 3 license.";
  } else if (license === "None") {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <img src="${renderLicenseBadge(data.license)}">

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  GitHub: [${data.github}]
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
