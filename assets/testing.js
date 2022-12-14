const inquirer = require("inquirer");
const fse = require("fs-extra");

function writeToFile(fileName, data) {
	let filePath = "./new_README_file/";
	fse
		.outputFile(filePath + fileName, data)
		.then((file) =>
			fse.move("./new_README_file/" + fileName, "./" + fileName, {
				overwrite: true,
			})
		)
		.then(() => {
			console.log("success!");
		})
		.catch((err) => {
			console.error(err);
		});
}

let whateverNotArr = "proving concept";

writeToFile("READMEtest1.md", whateverNotArr);

dummyAnswersArr = {
	title: "title part",
	description: "the description content\r\n",
	installation: "installation instructions",
	usage: "usage instructions here\r\n",
	testing: "testing instructions here\r\n",
	contribution: "instructions to contribute here \r\n",
	license: "MIT License \r\n",
	email: "mrjakeschultz@gmail.com",
	github_username: "mrjake",
};

function generateMarkdown(data) {
	return `
	# ${data.title} ${data.license}
	
	1. [Description](#description)
	2. [Installation](#installation)
	3. [](#)
	4. [](#)
	5. [](#)
	6. [](#)
	7. [](#)
  
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
	### Find me on [GitHub](https://github.com/${data.github_username})
	### Contact me at [${data.email}](${data.email}). 
	`;
}

testStuff = generateMarkdown(dummyAnswersArr);
console.log(testStuff);
