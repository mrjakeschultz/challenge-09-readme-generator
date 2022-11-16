// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fse = require("fs-extra");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	let filePath = "./new_README_file/";
	fse
		.outputFile(filePath + fileName, data)
		//vvv Optional block vvv to move the generated README file after creating it
		// .then((file) =>
		// 	fse.move("./new_README_file/" + fileName, "./" + fileName, {
		// 		overwrite: true,
		// 	})
		// )
		.then(() => {
			console.log("success!");
		})
		.catch((err) => {
			console.error(err);
		});
}

// TODO: Create a function to initialize app
// function init();

// // Function call to initialize app
// init();

const generateMarkdown = require("./generateMarkdown");

inquirer
	.prompt([
		/* Pass your questions in here */
		{
			type: "input",
			name: "title",
			message: "project title",
			default: "UNTITLED PROJECT",
		},
		{
			type: "editor",
			name: "description",
			message:
				"Press ENTER to open your default .txt editor; enter a description for this software and then SAVE and close the editor (DO NOT SAVE AS)",
			filter: function (input) {
				if (input == "") {
					return "NONE";
				} else {
					return input;
				}
			},
		},

		{
			type: "editor",
			name: "installation",
			message:
				"Press ENTER to open your default .txt editor; enter the installation instructions for this software and then SAVE and close the editor (DO NOT SAVE AS)",
			filter: function (input) {
				if (input == "") {
					return "NO INSTALLATION INSTRUCTIONS.";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "usage",
			message:
				"Press ENTER to open your default .txt editor; enter instructions for using this software and then SAVE and close the editor (DO NOT SAVE AS)",
			filter: function (input) {
				if (input == "") {
					return "NO USAGE INSTRUCTIONS.";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "testing",
			message:
				"Press ENTER to open your default .txt editor; enter testing instructions for this software and then SAVE and close the editor (DO NOT SAVE AS)",
			filter: function (input) {
				if (input == "") {
					return "NO TESTING INSTRUCTIONS.";
				} else {
					return input;
				}
			},
		},
		{
			type: "editor",
			name: "contribution",
			message:
				"Press ENTER to open your default .txt editor; how-to-contribute instructions for this software and then SAVE and close the editor (DO NOT SAVE AS)",
			filter: function (input) {
				if (input == "") {
					return "NO CONTRIBUTION INSTRUCTIONS.";
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
			choices: ["MIT license", "A crappy license", "No license"],
			filter: function (input) {
				if (input == "MIT license") {
					return "The MIT license. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
				}
				if (input == "A crappy license") {
					return "The IBM license. [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
				}
				if (input == "No license") {
					return "No license. Nothing governs the use or re-distribution of this software.";
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "Enter your email address",
			default: "NO EMAIL ADDRESS",
		},
		{
			type: "input",
			name: "github_username",
			message: "Enter your GitHub username",
			default: "NO GITHUB PROFILE",
		},
	])
	.then((answers) => {
		console.log("🚀 ~ file: index.js ~ line 27 ~ .then ~ answers", answers);
		let answersMarkdownArr = generateMarkdown(answers);
		writeToFile("yourNewREADME.md", answersMarkdownArr);
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
