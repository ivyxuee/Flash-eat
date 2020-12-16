export const FIND_ALL_REVIEWS_BY_USERNAME = "FIND_ALL_REVIEWS_BY_USERNAME";
export const findReviewsByUserName = (reviews) => ({
  type: FIND_ALL_REVIEWS_BY_USERNAME,
  reviews: reviews
});
