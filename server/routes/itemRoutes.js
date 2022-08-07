const express = require('express');
const { getItems, addItems } = require('../controller/item');

const itemRouter = express.Router();

itemRouter.route('').get(getItems).post(addItems);

module.exports = itemRouter;
