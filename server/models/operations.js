const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const operationSchema = mongoose.Schema({
	type: {
		type: String,
		required: [true, 'Must have a type'],
		enum: ['BUY', 'SELL', 'MAINTAIN'],
	},
	createdOn: {
		type: Date,
		default: Date.now(),
		required: [true, 'Must have time'],
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: [true],
	},
	status: {
		type: String,
		default: 'In progress',
	},
	quantity: {
		type: Number,
		default: 1,
	},
});

const Operation = mongoose.model(operationSchema);
