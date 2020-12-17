const mongoose = require('mongoose');

const itemSchema = require('../Item/item.schema.server');

const orderSchema = mongoose.Schema({
  restaurantId: String,
  userId: String,
  orderOn: String,
  items: [],
  shippedOn: String,
  total: Number,
  orderStatus: {type: String, enum: ["PAID", "UNPAID", "SHIPPED", "DELIVERED", "CLOSED", "FINISHED"], default: 'UNPAID'}
}, {collection: 'orders'});

module.exports = orderSchema;
