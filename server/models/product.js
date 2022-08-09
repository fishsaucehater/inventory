const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must have a name'],
		unique: true,
	},
	price: {
		type: Number,
		required: [true, 'Must have a price'],
	},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
