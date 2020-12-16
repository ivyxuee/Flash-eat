const paymentModel = require('../models/Payment/payment.model.server');

const findAllPayments = () =>
    paymentModel.find();

const findPaymentById = (pid) =>
    paymentModel.findById(pid);

const findPaymentsByUser = (uid) =>
    paymentModel.find({userId: uid});

const createPayment = (payment) =>
    paymentModel.create(payment);

const updatePayment = (pid, payment) =>
    paymentModel.findByIdAndUpdate({_id: pid}, payment);

const deletePayment = (pid) =>
    paymentModel.findByIdAndDelete({_id: pid});

module.exports = {
  findAllPayments,
  findPaymentById,
  findPaymentsByUser,
  createPayment,
  updatePayment,
  deletePayment
}
