const shoppingCartService = require('../services/shoppingcart.service.server')

module.exports = (app) => {
  app.get('/api/shoppingcart/users/:uid', (req, res) => {
    shoppingCartService.findShoppingCartForUser(req.params['uid'])
      .then(shoppingCart => res.send(shoppingCart))
  })
}
