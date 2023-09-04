const mongoose = require('mongoose');

const connectToDatabase = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs-course.fsrviue.mongodb.net/?retryWrites=true&w=majority`,
		);
	} catch (error) {
		return console.log('Erro: ', error)
	}

	console.log('Connected to database sucessfully')
};

module.exports = connectToDatabase;
