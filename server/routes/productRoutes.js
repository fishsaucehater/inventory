const express = require('express');
const { getProducts, addProducts } = require('../controller/product');

const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(addProducts);

module.exports = productRouter;
