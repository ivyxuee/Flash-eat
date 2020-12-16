const mongoose = require('mongoose');

const shoppingCartSchema = require('./shoppingCart.schema.server');

module.exports = mongoose.model('ShoppingCartModel', shoppingCartSchema);
