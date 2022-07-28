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

exports.addNewWarehouse = async (req, res) => {
	try {
		console.log(req.body);
		const warehouse = req.body;
		await Warehouse.create(warehouse);
		res.send('Done');
	} catch (error) {
		console.log(error);
	}
};
