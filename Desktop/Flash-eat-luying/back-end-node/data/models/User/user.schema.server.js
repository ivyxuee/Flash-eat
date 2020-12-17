const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  password: String,
  phone: String,
  email: String,
  address: String,
  admin: {
    adminLevel: {type: String, enum: ["NONE", "GENERAL", "SENIOR"], default: "NONE"}
    },
  customer: {
      customerLevel: {type: String, enum: ["RESTAURANT", "BRONZE", "SILVER", "GOLD", "DIAMOND"], default: "BRONZE"},
      // reviews: [{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'ReviewModel'
      // }],
      // orders: [{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'OrderModel'
      // }],
      // payments: [{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'PaymentModel'
      // }],
      // shoppingCart: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'ShoppingCartModel'
      // }
    },
}, {collection: 'users'});

module.exports = userSchema;
