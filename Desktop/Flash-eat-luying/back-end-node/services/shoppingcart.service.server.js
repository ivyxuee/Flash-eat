const shoppingCartDao = require('../data/daos/shoppingcart.dao.server');

const findShoppingCartForUser = (uid) =>
    shoppingCartDao.findShoppingCartForUser(uid);

module.exports = {
  findShoppingCartForUser
}
