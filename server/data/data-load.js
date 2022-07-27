const fs = require('fs');
const mongoose = require('mongoose');
const env = require('dotenv');
const Warehouse = require('../models/warehouse.js');

env.config({ path: '../config.env' });

const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log('DB connected'));

const warehouses = JSON.parse(fs.readFileSync('mock-data.json', 'utf-8'));

const importData = async () => {
	try {
		console.log(warehouses);
		await Warehouse.create(warehouses);
		console.log('data created');
	} catch (error) {
		console.log(error);
	} finally {
		process.exit();
	}
};

const deleteAll = async () => {
	try {
		await Warehouse.deleteMany();
		console.log('data deleted');
	} catch (error) {
		console.log(error);
	} finally {
		process.exit();
	}
};

importData();
