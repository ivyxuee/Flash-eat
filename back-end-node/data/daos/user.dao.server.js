const UserModel = require('../models/User/user.model.server');

const findAllUsers = () =>
    UserModel.find()
      .populate('customer.reviews');

const findUserById = (uid) =>
    UserModel.findById(uid);

const findUserByUserName= (username) =>
    UserModel.find({"userName": username});

const logIn = (userName, password) =>
    UserModel.findOne({"userName": userName, "password": password});

const createUser = (user) =>
    UserModel.create(user);

const updateUser = (uid, user) =>
    UserModel.findByIdAndUpdate({_id: uid}, user);

const deleteUser = (uid) =>
    UserModel.findByIdAndDelete({_id: uid});

const placeOrder = (uid, order) =>
    UserModel.findByIdAndUpdate({_id: uid},
        {$push: {
          orders: order
          }})

const writeReview = (uid, review) =>
    UserModel.findByIdAndUpdate({_id: uid},
        {$push: {
          reviews: review
          }})

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  placeOrder,
  writeReview,
  logIn,
  findUserByUserName
}
