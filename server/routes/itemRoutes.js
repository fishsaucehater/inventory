const express = require('express');
const { getItems, addItems, deleteItems } = require('../controller/item');

const itemRouter = express.Router();

itemRouter.route('/').get(getItems).post(addItems).delete(deleteItems);

module.exports = itemRouter;
