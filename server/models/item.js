const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must have a name'],
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
