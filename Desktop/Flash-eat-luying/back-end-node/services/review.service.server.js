const reviewDao = require('../data/daos/review.dao.server');

const findAllReviews = () =>
    reviewDao.findAllReviews();

const findReviewById = (rid) =>
    reviewDao.findReviewById(rid);

const findReviewByUser = (uid) =>
    reviewDao.findReviewByUser(uid);

const findReviewByUserName = (username) =>
    reviewDao.findReviewByUserName(username);

const findReviewByRestaurant = (rid) =>
    reviewDao.findReviewByRestaurant((rid));

const createReview = (uid, rid, review) =>
    reviewDao.createReview(uid, rid, review);

const updateReview = (rid, review) =>
    reviewDao.updateReview(rid, review);

const deleteReview = (rid) =>
    reviewDao.deleteReview(rid);

const createReviewSimpleURL = (review) =>
    reviewDao.createReviewSimpleURL(review);

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
