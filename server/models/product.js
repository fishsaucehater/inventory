const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must have a name'],
	},
	price: {
		type: Number,
		required: [true, 'Must have a price'],
	},
	quantity: {
		type: Number,
		default: 0,
	}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
