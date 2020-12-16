const mongoose = require('mongoose');

const itemSchema = require('./item.schema.server');

module.exports = mongoose.model('ItemModel', itemSchema);
