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
			name: "username",
			message: "What is your username?",
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

// [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
