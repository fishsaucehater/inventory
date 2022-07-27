const express = require('express');
const peopleRouter = require('./routes/peopleRoutes');

const app = express();


app.use('/api', peopleRouter);

exports.app = app;
