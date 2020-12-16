const mongoose = require('mongoose');

const customerSchema = require('./customer.schema.server');

module.exports = mongoose.model('CustomerModel', customerSchema);
