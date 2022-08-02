const Item = require('../models/item');
const Product = require('../models/product');
const Warehouse = require('../models/warehouse');

exports.getProducts = async (req, res) => {
	const queries = req.query;

	const products = await Product.find(queries);
	res.status(200).json(products);
};

exports.addProducts = async (req, res) => {
	const product = req.body;
	for (let i = 0; i < product.quantity; i++) {
		let data = { product_id: product.type, warehouse_id: product.warehouse };
		console.log(data);
		await Item.create(data);
		await Product.findByIdAndUpdate(data.product_id, {
			$inc: { quantity: 1 },
		});
		await Warehouse.findByIdAndUpdate(data.warehouse_id, {
			$inc: { itemCount: 1 },
		});
	}
	res.send('Done');
};
