const fs = require("fs");
const path = require("path");

// Create a folder
fs.mkdir(path.join(__dirname, "/test"), (error) => {
	if (error) {
		return console.log("Erro: ", error);
	}

	console.log("Folder create sucessfully");
});

// Create an archive
fs.writeFile(
	path.join(__dirname, "/test", "test.txt"),
	"Hello Node",
	(error) => {
		if (error) {
			return console.log("Erro: ", error);
		}

		console.log("Archive created sucessfully");

		// Add to an archive
		fs.appendFile(
			path.join(__dirname, "/test", "test.txt"),
			"Test",
			(error) => {
				if (error) {
					return console.log("Erro: ", error);
				}

				console.log("Info added to archive");

				//  Read an archive
				fs.readFile(
					path.join(__dirname, "/test", "test.txt"),
					"utf-8",
					(error, data) => {
						if (error) {
							return console.log("Erro: ", error);
						}

						console.log(data);
					}
				);
			}
		);
	}
);
