const Transaction = require('../models/transactions');

exports.getTransactions = async (req, res) => {
	try {
		let query = Transaction.find();
		let result = await query;
		console.log(result);
		res.status(200).json(result);
	} catch (error) {
		res.status(404);
		res.json({
			message: error,
		});
	}
};
