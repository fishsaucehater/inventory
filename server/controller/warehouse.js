const fs = require('fs');
const Warehouse = require('../models/warehouse');


exports.getAllWarehouses = async (req, res) => {
	try {
		const warehouses = await Warehouse.find();
		res.status(200).json(warehouses);
	} catch (error) {
		console.log(error);
	}
};
