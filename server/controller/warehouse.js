const Warehouse = require('../models/warehouse');

exports.getAllWarehouses = async (req, res) => {
	try {
		const warehouses = await Warehouse.find();
		res.status(200).json(warehouses);
	} catch (error) {
		console.log(error);
	}
};

exports.getWarehouse = async (req, res) => {
	try {
		let id = req.params.id;
		let warehouse = await Warehouse.findById(id);
		res.status(200).json(warehouse);
	} catch (error) {
		console.log(error);
	}
};

exports.addNewWarehouse = async (req, res) => {
	try {
		const warehouse = req.body;
		await Warehouse.create(warehouse);
		const warehouses = await Warehouse.find();
		res.status(200).json(warehouses);
	} catch (error) {
		console.log(error);
	}
};

exports.deleteWarehouse = async (req, res) => {
	try {
		let id = req.params.id;
		await Warehouse.deleteOne({ _id: id });
		const warehouses = await Warehouse.find();
		res.json(warehouses);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
};
