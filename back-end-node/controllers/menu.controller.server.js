const menuService = require('../services/menu.service.server');

module.exports = (app) => {
  app.get('/api/menus', (req, res) => {
    menuService.findAllMenus()
      .then(menus => res.send(menus))
  });
  app.get('/api/menus/restaurants/:rid', (req, res) => {
    menuService.findMenuForRestaurant(req.params['rid'])
      .then(menu => res.send(menu))
  })
  app.get('/api/menus/:mid/items', (req, res) => {
    menuService.findItemsForMenu(req.params['mid'])
    .then(items => res.send(items))
  })
  app.post('/api/menus', (req, res) => {
    menuService.createMenu(req.body)
      .then(menu => res.json(menu))
  });
  app.delete('/api/menus/:mid', (req, res) => {
    menuService.deleteMenu(req.params['mid'])
      .then(menu => res.send("Successfully deleted."))
  });
  app.put('/api/menus/:mid', (req, res) => {
    menuService.addItem(req.params['mid'], req.body)
      .then(menu => res.send(menu))
  });
  app.delete('/api/menus/:mid/items/:iid', (req, res) => {
    menuService.deleteItem(req.params['mid'], req.params['iid'])
      .then(menu => res.send(menu))
  })
}
