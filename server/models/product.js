const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must have a name'],
		unique: true,
	},
	retailPrice: {
		type: Number,
		required: [true, 'Must have a price'],
	},
	sellPrice: {
		type: Number,
		required: [true],
	},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
