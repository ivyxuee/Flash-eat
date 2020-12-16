const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  userId: String,
  paymentType: String,
  cardType: String,
  cardHolderName: String,
  expirationDate: String,
  securityCode: String
}, {collection: 'payments'});

module.exports = paymentSchema;
