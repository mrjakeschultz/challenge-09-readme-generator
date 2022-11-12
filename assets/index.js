// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

var inquirer = require("inquirer");
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
					return "no entry";
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
					return "no entry";
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
					return "no entry";
				}
			},
		},
		{
			type: "editor",
			name: "test",
			message:
				"Add instructions for testing this application in the .txt editor and then close the editor",
			filter: function (input) {
				if (input == "") {
					return "no entry";
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
		// Use user feedback for... whatever!!
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
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
