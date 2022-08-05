const express = require('express');
const warehouseRouter = require('./routes/warehouseRoutes');
const productRouter = require('./routes/productRoutes');
const itemRouter = require('./routes/itemRoutes');
const app = express();

app.use(express.json());

app.use('/item', itemRouter);
app.use('/warehouse', warehouseRouter);
app.use('/product', productRouter);

exports.app = app;
