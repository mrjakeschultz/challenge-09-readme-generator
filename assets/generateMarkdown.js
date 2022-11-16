// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//This ^^ can be done with the  .filter method in inquirer

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
////This ^^ can be done with the  .filter method in inquirer

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//This ^^ can be done with the  .filter method in inquirer

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title} ${data.license}
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribute](#contribute)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Questions](#questions)

  # Description
  ### ${data.description}
  

  # Installation
  ### ${data.installation}
  

  # Usage
  ### ${data.usage}
  

  # Contribute
  ### ${data.contribution}
  

  # Testing
  ### ${data.testing}


  # License
  ### This software is distributed under ${data.license}
  

  # Questions
  ### Find me on [GitHub](https://github.com/${data.github_username})!
  ### Contact me at [${data.email}](${data.email}). 
  `;
}

module.exports = generateMarkdown;
