const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  customerLevel: {type: String, enum: ["BRONZE", "SILVER", "GOLF", "DIAMOND"], default: "BRONZE"},
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReviewModel'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderModel'
  }],
  payments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentModel'
  }],
  shoppingCart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingCartModel'
  }
}, {collection: 'customers'});

module.exports = customerSchema;
