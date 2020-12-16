const mongoose = require('mongoose');

const paymentSchema = require('./payment.schema.server');

module.exports = mongoose.model('PaymentModel', paymentSchema);
