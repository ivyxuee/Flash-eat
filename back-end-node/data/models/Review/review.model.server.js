const mongoose = require('mongoose');

const reviewSchema = require('./review.schema.server');

module.exports = mongoose.model('ReviewModel', reviewSchema);
