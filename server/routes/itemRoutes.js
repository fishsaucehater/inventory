const express = require('express');
const { getItems } = require('../controller/item');

const itemRouter = express.Router();

itemRouter.route('').get(getItems);

module.exports = itemRouter;
