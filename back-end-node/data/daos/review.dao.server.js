const reviewModel = require('../models/Review/review.model.server');
const userModel = require('../models/User/user.model.server');

const findAllReviews = () =>
    reviewModel.find();

const findReviewById = (rid) =>
    reviewModel.findById(rid);

const findReviewByUser = (uid) =>
    reviewModel.find({"userId": uid});

const findReviewByUserName = (username) => {
  return userModel.findOne({"userName": username})
    .then(user => reviewModel.find({"userId": user._id}));
}

const findReviewByRestaurant = (rid) =>
    reviewModel.find({"restaurantId": rid});

const createReview = (uid, rid, review) => {
  review.userId = uid;
  review.restaurantId = rid;
  return reviewModel.create(review);
}

const updateReview = (rid, review) =>
    reviewModel.findByIdAndUpdate({_id: rid}, review);

const deleteReview = (rid) =>
    reviewModel.findByIdAndDelete({_id: rid});

const createReviewSimpleURL = (review) =>
    reviewModel.create(review);

module.exports = {
  findAllReviews,
  findReviewById,
  createReview,
  updateReview,
  deleteReview,
  findReviewByUser,
  findReviewByRestaurant,
  createReviewSimpleURL,
  findReviewByUserName
}
