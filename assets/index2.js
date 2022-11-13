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
