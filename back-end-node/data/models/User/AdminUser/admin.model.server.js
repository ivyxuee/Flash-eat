const mongoose = require('mongoose');

const adminSchema = require('./admin.schema.server');

module.exports = mongoose.model('AdminModel', adminSchema);
