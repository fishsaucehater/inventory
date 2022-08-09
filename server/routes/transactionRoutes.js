const express = require('express');
const { getTransactions } = require('../controller/transaction');

const transactionsRouter = express.Router();

transactionsRouter.route('/').get(getTransactions);
transactionsRouter.route('/buy');
transactionsRouter.route('/sell');
transactionsRouter.route('/maintain');

module.exports = transactionsRouter;
