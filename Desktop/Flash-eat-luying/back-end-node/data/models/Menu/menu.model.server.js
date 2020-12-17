const mongoose = require('mongoose');

const menuSchema = require('./menu.schema.server');

module.exports = mongoose.model('MenuModel', menuSchema);
