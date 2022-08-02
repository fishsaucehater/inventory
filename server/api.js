const express = require('express');
const warehouseRouter = require('./routes/warehouseRoutes');

const app = express();

app.use(express.json());

app.use('/warehouse', warehouseRouter);

exports.app = app;
