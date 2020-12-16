const orderDao = require('../data/daos/order.dao.server');

const findAllOrders = () =>
    orderDao.findAllOrders();

const findOrderById = (oid) =>
    orderDao.findOrderById(oid);

const findOrderByUser = (uid) =>
    orderDao.findOrderByUser(uid);

const findOrderByRestaurant = (rid) =>
    orderDao.findOrderByRestaurant(rid);

const createOrder = (uid, rid, order) =>
    orderDao.createOrder(uid, rid, order);

const updateOrder = (oid, order) =>
    orderDao.updateOrder(oid, order);

const deleteOrder = (oid) =>
    orderDao.deleteOrder(oid);

const createOrderSimpleURL = (order) =>
    orderDao.createOrderSimpleURL(order);

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
