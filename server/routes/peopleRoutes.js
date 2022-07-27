const express = require('express');
const { getAllWarehouses } = require('../controller/warehouse');

const peopleRouter = express.Router();

peopleRouter.route('/')
    .get(getAllWarehouses)
    .post();

module.exports = peopleRouter;