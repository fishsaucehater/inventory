const express = require('express');
const {
	getAllWarehouses,
	addNewWarehouse,
} = require('../controller/warehouse');

const peopleRouter = express.Router();

peopleRouter.route('/').get(getAllWarehouses).post(addNewWarehouse);

module.exports = peopleRouter;