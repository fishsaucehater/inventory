const Item = require('../models/item');

exports.getItems = async (req, res) => {
	let warehouse = req.query.warehouse;
	let query = Item.find({ warehouse_id: warehouse });
	let result = await query.populate('product_id');
	res.json(result);
};
