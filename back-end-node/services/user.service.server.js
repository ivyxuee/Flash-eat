const userDao = require('../data/daos/user.dao.server');

const findAllUsers = () =>
    userDao.findAllUsers();

const findUserById = (uid) =>
    userDao.findUserById(uid);

const findUserByUserName = (username) =>
    userDao.findUserByUserName(username);

const logIn = (userName, password) =>
    userDao.logIn(userName, password);

const createUser = (user) =>
    userDao.createUser(user);

const updateUser = (uid, user) =>
    userDao.updateUser(uid, user);

const deleteUser = (uid) =>
    userDao.deleteUser(uid);

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  logIn,
  findUserByUserName
}
