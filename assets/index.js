// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fse = require("fs-extra");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	let filePath = "./assets/newREADME/";
	fse.ensureFile(filePath + fileName, (err) => {
		console.log(err);
	});
	fse.outputFile(filePath.fileName, data, (err) => {
		console.log(err);
	});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const generateMarkdown = require("./generateMarkdown");

inquirer
	.prompt([
		/* Pass your questions in here */
		{
			type: "input",
			name: "title",
			message: "project title",
			default: "no title entry",
		},
		{
			type: "editor",
			name: "description",
			message:
				"Enter project description in the opened .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no entry";
				} else {
					return input;
				}
			},
		},

		{
			type: "editor",
			name: "installation",
			message:
				"Add instructions for installing this app in the opened .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no installation entry";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "usage",
			message:
				"Enter usage instructions for the project in the opened .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no usage entry";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "contribution",
			message:
				"Add instructions for contributing to this project in the .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no contribution entry";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "testing",
			message:
				"Add instructions for testing this application in the .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no testing entry";
				} else {
					return input;
				}
			},
		},
		{
			type: "list",
			name: "license",
			message: "Choose a license",
			default: "no license selection",
			choices: ["MIT license", "No license", "Fake license"],
		},
		{
			type: "input",
			name: "github_username",
			message: "Github username?",
			default: "no entry",
		},
	])
	.then((answers) => {
		console.log("🚀 ~ file: index.js ~ line 27 ~ .then ~ answers", answers);
		generateMarkdown(answers);
		writeToFile("NewREADME", answers);
		// Use user feedback for... whatever!!
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("Prompt couldn't be rendered in the current environment");
		} else {
			// Something else went wrong
			console.error(error);
		}
	});

// Title,
// Description,
// Table of Contents,
// Installation,
// Usage,
// License,
// Contributing,
// Tests,
// and Questions
