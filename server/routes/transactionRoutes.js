const express = require('express');
const {
	getTransactions,
	addTransactions,
} = require('../controller/transaction');

const transactionsRouter = express.Router();

transactionsRouter.route('/').get(getTransactions);
transactionsRouter.route('/buy').post(addTransactions);
transactionsRouter.route('/sell');
transactionsRouter.route('/maintain');

module.exports = transactionsRouter;
