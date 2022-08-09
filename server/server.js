const mongoose = require('mongoose');
const env = require('dotenv');
const { app } = require('./api');
const Warehouse = require(`${__dirname}/models/product.js`);

env.config({ path: './config.env' });

const PORT = process.env.PORT;
const DB = process.env.DB_LOCAL.replace('<password>', process.env.DB_PASSWORD);
console.log(DB);

mongoose.connect(DB).then((con) => {
	console.log('DB connected');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
