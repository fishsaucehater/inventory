const express = require('express');
const {
	getAllWarehouses,
	getWarehouse,
	addNewWarehouse,
	deleteWarehouse,
} = require('../controller/warehouse');

const warehouseRouter = express.Router();

warehouseRouter.route('/').get(getAllWarehouses).post(addNewWarehouse);
warehouseRouter.route('/:id').get(getWarehouse).delete(deleteWarehouse);

module.exports = warehouseRouter;
