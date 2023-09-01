const mongoose = require('mongoose');

const connectToDatabase = async () => {
	await mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs-course.nojxxtl.mongodb.net/?retryWrites=true&w=majority`
	),
		(error) => {
			if (error) {
				return console.log('Error: ', error);
			}

			return console.log('Connected sucessfully');
		};
};

module.exports = connectToDatabase;
