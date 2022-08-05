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
		for (let i = 0; i < product.quantity; i++) {
			let data = {
				product_id: product.type,
				warehouse_id: product.warehouse,
				createdOn: Date.now(),
			};
			await Item.create(data);
		}
		await Product.findByIdAndUpdate(product.type, {
			$inc: { quantity: product.quantity },
		});
		await Warehouse.findByIdAndUpdate(product.warehouse, {
			$inc: { itemCount: product.quantity },
		});
		res.send('Done');
	} catch (error) {
		console.error(error);
	}
};
