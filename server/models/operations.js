const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
	type: {
		type: String,
		required: [true, 'Must have a type'],
	},
	createdOn: {
		type: Number,
		required: [true, 'Must have time'],
	},
	status: {
		type: String,
		default: 'In progress',
	},
});

const Operation = mongoose.model(operationSchema);
