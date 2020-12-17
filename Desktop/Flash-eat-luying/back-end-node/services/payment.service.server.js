const paymentDao = require('../data/daos/payment.dao.server');

const findAllPayments = () =>
    paymentDao.findAllPayments();

const findPaymentById = (pid) =>
    paymentDao.findPaymentById(pid);

const findPaymentsByUser = (uid) =>
    paymentDao.findPaymentsByUser(uid);

const createPayment = (payment) =>
    paymentDao.createPayment(payment);

const updatePayment = (pid, payment) =>
    paymentDao.updatePayment(pid, payment);

const deletePayment = (pid) =>
    paymentDao.deletePayment(pid);

module.exports = {
  findAllPayments,
  findPaymentById,
  findPaymentsByUser,
  createPayment,
  updatePayment,
  deletePayment
}
