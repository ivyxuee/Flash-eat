const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  restaurantId: String,
  userId: String,
  timestamp: String,
  review: String,
  rating: Number
}, {collection: 'reviews'});

module.exports = reviewSchema;
