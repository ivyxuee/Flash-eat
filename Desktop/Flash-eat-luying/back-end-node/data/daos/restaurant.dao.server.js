const RestaurantModel = require('../models/Restaurant/restaurant.model.server');

const findAllRestaurants = () =>
    RestaurantModel.find();

const findRestaurantById = (rid) =>
    RestaurantModel.findById(rid);

const updateRestaurant = (rid, restaurant) =>
    RestaurantModel.findByIdAndUpdate({restaurantId: rid}, restaurant);

module.exports = {
  findAllRestaurants,
  findRestaurantById,
  updateRestaurant
}
