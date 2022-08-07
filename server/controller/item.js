const Item = require('../models/item');

exports.getItems = async (req, res) => {
	let warehouse = req.query.warehouse;
	let query = Item.find({ warehouse_id: warehouse });
	let result = await query.populate('product_id');
	res.status(200).json(result);
};

exports.addItems = async (req, res) => {
	try {
		let items = req.body;
		let oldItem = await Item.find({
			product_id: items.product_id,
			warehouse_id: items.warehouse_id,
		});
		if (oldItem.length == 0) {
			await Item.create(items);
			res.status(201).json(items);
		} else {
			let query = Item.find({
				product_id: items.product_id,
				warehouse_id: items.warehouse_id,
			});
			await Item.updateOne(query, {
				$inc: { quantity: items.quantity },
			});
			res.status(201).json(items);
		}
	} catch (error) {
		console.error(error);
	}
};
