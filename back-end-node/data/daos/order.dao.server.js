const orderModel = require('../models/Order/order.model.server');

const findAllOrders = () =>
    orderModel.find();

const findOrderById = (oid) =>
    orderModel.findById(oid);

const findOrderByUser = (uid) =>
    orderModel.find({"userId": uid});

const findOrderByRestaurant = (rid) =>
    orderModel.find({"restaurantId": rid});

const createOrder = (uid, rid, order) => {
  order.userId = uid;
  order.restaurantId = rid;
  return orderModel.create(order);
}

const updateOrder = (oid, order) =>
    orderModel.findByIdAndUpdate({_id: oid}, order);

const deleteOrder = (oid) =>
    orderModel.findByIdAndDelete({_id: oid});

const createOrderSimpleURL = (order) =>
    orderModel.create(order);

module.exports = {
  findAllOrders,
  findOrderById,
  findOrderByUser,
  findOrderByRestaurant,
  createOrder,
  updateOrder,
  deleteOrder,
  createOrderSimpleURL
}
