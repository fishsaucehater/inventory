const Item = require('../models/item');

exports.getItems = async (req, res) => {
	let filter = req.query;
	let query = Item.find(filter);
	let result = await query.populate('product_id');
	res.status(200).json(result);
};

exports.deleteItems = async (req, res) => {
	let filter = req.query;
	let query = Item.find(filter);
	await query.deleteMany();
	res.status(200).send('Done');
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
			let filter = {
				product_id: items.product_id,
				warehouse_id: items.warehouse_id,
			};
			await Item.findOneAndUpdate(filter, {
				$inc: { quantity: items.quantity },
			});
			res.status(201).json(items);
		}
	} catch (error) {
		res.status(405).json({
			body: error,
		});
	}
};

