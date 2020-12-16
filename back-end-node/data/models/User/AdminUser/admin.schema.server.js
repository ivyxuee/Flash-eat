const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  adminLevel: {type: String, enum: ["GENERAL", "SENIOR"]}
}, {collection: 'admins'});

module.exports = adminSchema;
