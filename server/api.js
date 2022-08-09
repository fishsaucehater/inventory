const express = require('express');
const warehouseRouter = require('./routes/warehouseRoutes');
const productRouter = require('./routes/productRoutes');
const itemRouter = require('./routes/itemRoutes');
const transactionsRouter = require('./routes/transactionRoutes');
const app = express();

app.use(express.json());

app.use('/item', itemRouter);
app.use('/warehouse', warehouseRouter);
app.use('/product', productRouter);
app.use('/transaction', transactionsRouter);

exports.app = app;
