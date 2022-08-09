const fs = require('fs');
const mongoose = require('mongoose');
const env = require('dotenv');
const Warehouse = require('../models/warehouse.js');
const Product = require('../models/product');
const Item = require('../models/item');
const { del } = require('superagent');

env.config({ path: '../config.env' });

const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log('DB connected'));

const warehouses = JSON.parse(fs.readFileSync('mock-data.json', 'utf-8'));
const products = JSON.parse(fs.readFileSync('product.json', 'utf-8'));
const items = JSON.parse(fs.readFileSync('items.json', 'utf-8'));

const importData = async () => {
	try {
		console.log(warehouses);
		await Warehouse.create(warehouses);
		await Product.create(products);
		console.log('data created');
	} catch (error) {
		console.log(error);
	} finally {
		process.exit();
	}
};

const deleteAll = async () => {
	try {
		await Item.deleteMany();
		await Warehouse.deleteMany();
		await Product.deleteMany();
		console.log('data deleted');
	} catch (error) {
		console.log(error);
	} finally {
		process.exit();
	}
};

const itemsLoad = async () => {
	try {
		await Item.create(items);
		items.forEach(async (item) => {
			await Product.findByIdAndUpdate(item.product_id, {
				$inc: { quantity: 1 },
			});
			await Warehouse.findByIdAndUpdate(item.warehouse_id, {
				$inc: { itemCount: 1 },
			});
		});
		console.log('item added');
	} catch (error) {
		console.log(err);
	}
};

const itemsDelete = async () => {
	try {
		await Item.deleteMany();
		console.log('items deleted');
	} catch (error) {
		console.log(error);
	}
};

importData();