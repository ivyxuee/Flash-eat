const paymentService = require('../services/payment.service.server');

module.exports = (app) => {
  app.get('/api/payments', (req, res) => {
    paymentService.findAllPayments()
      .then(payments => res.send(payments))
  });
  app.get('/api/payments/:pid', (req, res) => {
    paymentService.findPaymentById(req.params['pid'])
      .then(payment => res.json(payment))
  });
  app.get('/api/payments/users/:uid', (req, res) => {
    paymentService.findPaymentsByUser(req.params['uid'])
      .then(payments => res.send((payments)))
  });
  app.post('/api/payments', (req, res) => {
    paymentService.createPayment(req.body)
      .then(payment => res.json(payment))
  });
  app.put('/api/payments/:pid', (req, res) => {
    paymentService.updatePayment(req.params['pid'], req.body)
      .then(payment => res.json(payment))
  });
  app.delete('/api/payments/:pid', (req, res) => {
    paymentService.deletePayment(req.params['pid'])
      .then(payment => res.send("Successfully deleted."))
  })
}
