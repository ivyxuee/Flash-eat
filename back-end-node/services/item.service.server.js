const itemDao = require('../data/daos/item.dao.server');

const findAllItems = () =>
    itemDao.findAllItems();

const updateItem = (iid, item) =>
    itemDao.updateItem(iid, item);

const findItemById = (iid) =>
    itemDao.findItemById(iid);

module.exports = {
  findAllItems,
  updateItem,
  findItemById
}
