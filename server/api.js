const express = require('express');
const warehouseRouter = require('./routes/warehouseRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/warehouse', warehouseRouter);
app.use('/product', productRouter);

exports.app = app;
