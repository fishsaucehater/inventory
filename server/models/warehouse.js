const mongoose = require('mongoose');

const warehouseSchema = mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, 'Must have a name'],
	},
	address: {
		type: String,
		unique: true,
		required: [true, 'Must have an address'],
	},
	type: {
		type: String,
		default: 'Kho vat tu',
		enum: ['Kho vat tu', 'Kho may'],
	},
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);
module.exports = Warehouse;
