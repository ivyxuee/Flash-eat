const mongoose = require('mongoose');

const menuSchema = require('../Menu/menu.schema.server');
const reviewSchema = require('../Review/review.schema.server');
const orderSchema = require('../Order/order.schema.server');

const restaurantSchema = mongoose.Schema({
  name: String,
  description: String,
  listedHours: String,
  isActive: Boolean,
  address: String,
  menu: menuSchema,
  review: [reviewSchema],
  order: [orderSchema],
  cuisineType: String,
  type: String
}, {collection: 'restaurants'});

module.exports = restaurantSchema;
