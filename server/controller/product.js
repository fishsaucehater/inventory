const Item = require('../models/item');
const Product = require('../models/product');
const Warehouse = require('../models/warehouse');

exports.getProducts = async (req, res) => {
	try {
		const queries = req.query;
		const products = await Product.find(queries);
		res.status(200).json(products);
	} catch (error) {
		console.error(error);
	}
};

exports.addProducts = async (req, res) => {
	try {
		const product = req.body;
		res.send('Done');
	} catch (error) {
		console.error(error);
	}
};
