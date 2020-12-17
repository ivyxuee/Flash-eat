const itemService = require('../services/item.service.server');

module.exports = (app) => {
  app.get('/api/items/:iid', (req, res) => {
    itemService.findItemById(req.params['iid'])
      .then(item => res.json(item))
  });
  app.get('/api/items', (req, res) => {
    itemService.findAllItems()
    .then(items => res.json(items))
  });
  app.put('/api/items/:iid', (req, res) => {
    itemService.updateItem(req.params['iid'], req.body)
      .then(item => res.json(item))
  })
}
