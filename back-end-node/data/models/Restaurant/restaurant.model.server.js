const mongoose = require('mongoose');

const restaurantSchema = require('./restaurant.schema.server');

module.exports = mongoose.model('RestaurantModel', restaurantSchema);
