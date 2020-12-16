const orderService = require('../services/order.service.server');

module.exports = (app) => {
  app.get('/api/orders', (req, res) => {
    orderService.findAllOrders()
      .then(orders => res.send(orders))
  });
  app.get('/api/orders/:oid', (req, res) => {
    orderService.findOrderById(req.params['oid'])
      .then(order => res.json(order))
  });
  app.get('/api/orders/users/:uid', (req, res) => {
    orderService.findOrderByUser(req.params['uid'])
      .then(orders => res.send(orders))
  });
  app.get('/api/orders/restaurants/:rid', (req, res) => {
    orderService.findOrderByRestaurant(req.params['rid'])
      .then(orders => res.send(orders))
  });
  app.post('/api/orders/users/:uid/restaurants/:rid', (req, res) => {
    orderService.createOrder(req.params['uid'], req.params['rid'], req.body)
      .then(order => res.json(order))
  });
  app.post('/api/orders/restaurants/:rid/users/:uid', (req, res) => {
    orderService.createOrder(req.params['uid'], req.params['rid'], req.body)
      .then(order => res.json(order))
  });
  app.post('/api/orders', (req, res) => {
    orderService.createOrderSimpleURL(req.body)
    .then(order => res.json(order))
  });
  app.delete('/api/orders/:oid', (req, res) => {
    orderService.deleteOrder(req.params['oid'])
      .then(order => res.send("Successfully deleted."))
  })
  app.put('/api/orders/:oid', (req, res) => {
    orderService.updateOrder(req.params['oid'], req.body)
      .then(order => res.send(order))
  })
}
