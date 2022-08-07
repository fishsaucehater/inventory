const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = mongoose.Schema({
	product_id: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: [true, 'Must have a name'],
	},
	warehouse_id: {
		type: Schema.Types.ObjectId,
		ref: 'Warehouse',
		required: [true, 'Must have a name'],
	},
	quantity: {
		type: Number,
		default: 0,
	},
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
