const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemName: String,
  price: Number,
  quantity: Number
}, {collection: 'items'});

module.exports = itemSchema;
