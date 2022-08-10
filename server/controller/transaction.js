const Transaction = require('../models/transactions');

exports.getTransactions = async (req, res) => {
	try {
		let filter = req.query;
		let query = Transaction.find(filter);
		query = query.populate('product');
		query = query.sort('createdOn');
		let result = await query;
		res.status(200).json(result);
	} catch (error) {
		res.status(404);
		res.json({
			message: error,
		});
	}
};

exports.addTransactions = async (req, res) => {
	try {
		const query = req.query;
		console.log(query);
		await Transaction.create(query);
		res.status(200).send('Done');
	} catch (error) {
		res.status(404);
		res.json({
			message: error,
		});
	}
};
