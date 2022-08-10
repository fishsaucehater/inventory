const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = mongoose.Schema({
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
	warehouse: {
		type: Schema.Types.ObjectId,
		ref: 'Warehouse',
	},
	status: {
		type: String,
		default: 'In progress',
		enum: ['In progress', 'Completed', 'Warning', 'Cancelled'],
	},
	quantity: {
		type: Number,
	},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
