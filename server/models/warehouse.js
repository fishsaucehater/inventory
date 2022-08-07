const mongoose = require('mongoose');

const warehouseSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must have a name'],
	},
	address: {
		type: String,
		required: [true, 'Must have an address'],
	},
	type: {
		type: String,
		default: 'Kho vat tu',
	},
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);
module.exports = Warehouse;
