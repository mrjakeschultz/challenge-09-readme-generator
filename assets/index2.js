const inquirer = require("inquirer");
const fse = require("fs-extra");

function writeToFile(fileName, data) {
	let filePath = "./new_README_file/";
	// fse.ensureFile(filePath + fileName, (err) => {
	// 	console.log(err);
	// });
	fse.outputFile(filePath + fileName, data, (err) => {
		console.log(err);
	});
}

let whateverNotArr = "A string for the function overwriting all the stuff test";

writeToFile("READMEtest1.md", whateverNotArr);
